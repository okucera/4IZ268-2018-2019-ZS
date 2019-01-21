var cb = new Codebird;
var twAppKey = 'okLlYkRsOE2v7c1Gmh3TMKrIv';
var twAppSecret = '4rhFBEwTYT9a2ijAtPDcIilhrApyxp0CKycTqPa7raimvazAD9';
var twToken = '';
var twSecret = '';
var requested = false;

$(".tw-auth").click(function (e) {
  e.preventDefault();
  authorizeOpen();
});

$(".tw-pin").click(function (e) {
  e.preventDefault();
  if (requested == true) {
    $(".tw-pin-submit").prop('disabled', false);
  } else {
    errorScreen('You must request a unique PIN first, please try again.');
  }
})

$(".tw-pin-submit").click(function (e) {
  loaderContainer = $(".loader-container");
  e.preventDefault();
  loadUser();
  var response = authorizePin();
  if (response != false) {
    if (response == "different") {
      alertPopUp("Your PIN has different lenght than requested. Please request new PIN!", 5000);
    } else {
      loaderContainer.toggleClass("hide");
      setTimeout(function () {
        loaderContainer.toggleClass("hide");
      }, 2000);
      $(".intro-container").toggleClass("hide");
      $(".tw-container").toggleClass("hide");
      setTimeout(function () {
        alertPopUp("Logged-in", 2000);
      }, 2000);
    }
  } else {
    errorScreen("PIN authorization failure, please try again.")
  };
});

$(".tw-tweet-submit").click(function (e) {
  e.preventDefault();
  tweet($(".post-text").val());
});

$(".tw-logout").click(function (e) {
  e.preventDefault();
  logOut();
});

$(".error-ok-btn").click(function (e) {
  e.preventDefault();
  location.reload();
});

$(".post-text").keyup(function (e) {
  e.preventDefault();
  var charNumber = $(".post-text").val().length;
  var charLimit = charNumber + ` / 280`;
  if (charNumber > 280) {
    $(".tw-char-limit").addClass("char-red");
  } else {
    $(".tw-char-limit").removeClass("char-red");
  };
  $(".tw-char-limit").html(charLimit);
});

function authorizeOpen() {
  requested = true;
  cb.setConsumerKey(twAppKey, twAppSecret);
  cb.__call("oauth_requestToken", { oauth_callback: "oob" }, function (
    reply,
    rate,
    err
  ) {
    if (err) {
      console.log("error response or timeout exceeded" + err.error);
      errorScreen("Request PIN failed, please try again later");
    }
    if (reply) {
      if (reply.errors && reply.errors["415"]) {
        console.log(reply.errors["415"]);
        console.log(reply);
      }
      cb.setToken(reply.oauth_token, reply.oauth_token_secret);
      cb.__call("oauth_authorize", {}, function (auth_url) {
        window.codebird_auth = window.open(auth_url);
      });
    }
  });
};

function authorizePin() {
  twPin = $(".tw-pin"); 
  if (twPin.val().length !== 7) {
    return "different";
  }
  cb.__call(
    "oauth_accessToken",
    { oauth_verifier: twPin.val() },
    function (reply, rate, err) {
      if (err) {
        console.log("error response or timeout exceeded" + err.error);
        errorScreen("Authentification of your PIN has failed, please try again or contact the administrator");
      }
      if (reply) {
        if ((reply.oauth_token || reply.oauth_token_secret) === undefined) {
          errorScreen("Authentification of your PIN has failed, please try again or contact the administrator");
          return false;
        } else {
          cb.setToken(reply.oauth_token, reply.oauth_token_secret);
          loadUser();
          $(".tw-pin").val("");
          $(".tw-pin-submit").prop('disabled', true);
        }
      }
    }
  );

};

function tweet(text) {
  if (text.length <= 280) {
    var params = {
      status: text

    };
    cb.__call("statuses_update", params, function (
      reply,
      rate,
      err
    ) {
      if (reply) {
        alertPopUp("Tweet sent. May the force be with him...", 3000);
        $(".post-text").val("");
        loadUser();
      };
    });
  } else {
    alertPopUp("It's ehm... too long...", 4000);
  }
};

function logOut() {
  /* This function is broken on the current CDN, there for, just changes the "view"
  cb.logout().then(() => {
    $(".loader-container").toggleClass("hide");
    setTimeout(function () {
      $(".loader-container").toggleClass("hide");
    }, 2000);
    $(".post-text").val("");
    loadUser();
    $(".tw-login").toggleClass("showed");
    $(".intro-container").toggleClass("hide");
    $(".tw-container").toggleClass("hide");
    requested = false;
    alertPopUp("Log out successful", 3000);
  });*/
  
  // For getting to other platforms
  $(".loader-container").toggleClass("hide");
  setTimeout(function () {
    $(".loader-container").toggleClass("hide");
  }, 2000);
  $(".tw-login").toggleClass("showed");
  $(".intro-container").toggleClass("hide");
  $(".tw-container").toggleClass("hide");
  alertPopUp("NOT LOGGED OUT!", 5000);
};

function loadUser() {
  cb.__call("account_verifyCredentials", {}, function (reply) {
    var nameHTML = `Sup, your name is ` + reply.name + ` (<a href="https://twitter.com/@${reply.screen_name}" target="_blank">` + `@` + reply.screen_name + `</a>)!`;
    var profileHTML = `<div class="tw-user-profile" style="background-image: url(${reply.profile_image_url_https})"></div>`;
    var aboutHMTL = reply.description;
    var registeredDate = new Date(reply.created_at).toLocaleDateString('cs-CZ');
    var registeredHTML = `You registerd at: <em>` + registeredDate + `</em>`;
    var activityDate = new Date(reply.status.created_at).toLocaleDateString('cs-CZ');
    var activityTime = new Date(reply.status.created_at).toLocaleTimeString('cs-CZ');
    var activityHTML = `Your last activity happened: <em>` + activityDate + ` ` + activityTime + `</em>`;
    $(".tw-user-name").html(nameHTML);
    twAbout = $(".tw-about");
    if (aboutHMTL !== null) {
      twAbout.html(aboutHMTL);
    } else {
      twAbout.toggleClass("hide");
    };
    $(".tw-user-profile").html(profileHTML);
    $(".tw-registered").html(registeredHTML);
    $(".tw-last-activity").html(activityHTML);
  });
};
