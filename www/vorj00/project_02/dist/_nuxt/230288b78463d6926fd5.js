(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{168:function(t,e,s){var a=s(171);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,s(29).default)("59497dc0",a,!0,{})},169:function(t,e,s){var a=s(173);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,s(29).default)("798c3abc",a,!0,{})},170:function(t,e,s){"use strict";var a=s(168);s.n(a).a},171:function(t,e,s){(t.exports=s(28)(!1)).push([t.i,"\n.VueToNuxtLogo{display:inline-block;-webkit-animation:turn 2s linear 1s forwards;animation:turn 2s linear 1s forwards;-webkit-transform:rotateX(180deg);transform:rotateX(180deg);position:relative;overflow:hidden;height:180px;width:245px\n}\n.Triangle{position:absolute;top:0;left:0;width:0;height:0\n}\n.Triangle--one{border-left:105px solid transparent;border-right:105px solid transparent;border-bottom:180px solid #41b883\n}\n.Triangle--two{top:30px;border-left:87.5px solid transparent;border-right:87.5px solid transparent;border-bottom:150px solid #3b8070\n}\n.Triangle--three,.Triangle--two{left:35px;-webkit-animation:goright .5s linear 3.5s forwards;animation:goright .5s linear 3.5s forwards\n}\n.Triangle--three{top:60px;border-left:70px solid transparent;border-right:70px solid transparent;border-bottom:120px solid #35495e\n}\n.Triangle--four{top:120px;left:70px;-webkit-animation:godown .5s linear 3s forwards;animation:godown .5s linear 3s forwards;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:60px solid #fff\n}\n@-webkit-keyframes turn{\nto{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)\n}\n}\n@keyframes turn{\nto{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)\n}\n}\n@-webkit-keyframes godown{\nto{top:180px\n}\n}\n@keyframes godown{\nto{top:180px\n}\n}\n@-webkit-keyframes goright{\nto{left:70px\n}\n}\n@keyframes goright{\nto{left:70px\n}\n}",""])},172:function(t,e,s){"use strict";var a=s(169);s.n(a).a},173:function(t,e,s){(t.exports=s(28)(!1)).push([t.i,"",""])},174:function(t,e,s){"use strict";s.r(e);var a=s(14),r=s.n(a),n=(s(44),s(4)),i=s.n(n),o=(s(45),s(62),s(170),s(22)),c=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"VueToNuxtLogo"},[e("div",{staticClass:"Triangle Triangle--two"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--one"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--three"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--four"})])}],!1,null,null,null);c.options.__file="Logo.vue";var l,u,p,h=c.exports,d=(s(61),s(16),function(t){var e="";return Object.keys(t).forEach(function(s){e?e+=","+t[s].id:e=t[s].id}),e}),g={components:{Logo:h},data:function(){return{artistsResults:{},currentlyPlaying:"",searchQuery:"",status:"",tracks:{},url:"",usersFavorites:{}}},mounted:function(){if(this.url=window.location.origin,this.status="Chceš seřadit nejlepší písničky daného interpreta podle danceability? Stačí být přihlášen, zadat nějakého umělce do vyhledávání a pak ho vybrat.",this.$route.hash||localStorage.getItem("user_token")){if(this.$route.hash){for(var t,e=this.$route.hash.replace("#","").split("&"),s={},a=0;a<e.length;a++)(t=e[a].split("=")).length<2&&t.push(""),s[decodeURIComponent(t[0])]=decodeURIComponent(t[1]);localStorage.setItem("user_token",s.token_type+" "+s.access_token),this.$toast.success("Přihlášení bylo úspěšné, vyhledej nějakého umělce")}this.getUsersFavorites()}},watch:{searchQuery:(l=function(t){this.getSearch()},u=500,p=null,function(){clearTimeout(p);var t=arguments,e=this;p=setTimeout(function(){l.apply(e,t)},u)})},methods:{getUsersFavorites:function(){var t=i()(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$axios.get("https://api.spotify.com/v1/me/top/artists",{headers:{Authorization:localStorage.getItem("user_token")}});case 3:this.usersFavorites=t.sent,this.usersFavorites=this.usersFavorites.data.items,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),this.$toast.error("Nastala chyba, zkus se, prosím, znovu přihlásit");case 10:case"end":return t.stop()}},t,this,[[0,7]])}));return function(){return t.apply(this,arguments)}}(),getSearch:function(){var t=i()(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(localStorage.getItem("user_token")){t.next=3;break}return this.$toast.show("Nejprve se, prosím, přihlaš"),t.abrupt("return");case 3:if(this.tracks={},""===this.searchQuery){t.next=17;break}return t.prev=5,t.next=8,this.$axios.get("https://api.spotify.com/v1/search?q=\n              ".concat(this.searchQuery,"&type=artist"),{headers:{Authorization:localStorage.getItem("user_token")}});case 8:this.artistsResults=t.sent,this.artistsResults=this.artistsResults.data.artists.items,t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),this.$toast.error("Nastala chyba, zkus se, prosím, znovu přihlásit");case 15:t.next=19;break;case 17:this.artistsResults={},this.status="Vyhledej nějakýho umělce, nebo vyber oblíbeného";case 19:case"end":return t.stop()}},t,this,[[5,12]])}));return function(){return t.apply(this,arguments)}}(),getTopTracks:function(){var t=i()(regeneratorRuntime.mark(function t(e){var s,a,n,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.artistsResults={},t.next=3,this.$axios.get("https://api.spotify.com/v1/artists/".concat(e,"/top-tracks?country=US"),{headers:{Authorization:localStorage.getItem("user_token")}});case 3:return s=(s=t.sent).data.tracks,a=d(s),t.next=8,this.$axios.get("https://api.spotify.com/v1/audio-features?ids=".concat(a),{headers:{Authorization:localStorage.getItem("user_token")}});case 8:for(n=t.sent,i=0;i<s.length;i++)s[i]=r()({},s[i],n.data.audio_features[i]);this.tracks=s,s.sort(function(t,e){return e.danceability-t.danceability}),this.getCurrentlyPlaying();case 13:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),getCurrentlyPlaying:function(){var t=i()(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.get("https://api.spotify.com/v1/me/player/currently-playing",{headers:{Authorization:localStorage.getItem("user_token")}});case 2:e=t.sent,this.currentlyPlaying=e.data.item.id;case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),playTrack:function(){var t=i()(regeneratorRuntime.mark(function t(e,s){var a,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$axios.get("https://api.spotify.com/v1/me/player/devices",{headers:{Authorization:localStorage.getItem("user_token")}});case 3:if(0===(a=t.sent).data.devices.length){t.next=12;break}return r=a.data.devices[0].id,t.next=8,this.$axios.put("https://api.spotify.com/v1/me/player/play?device_id=".concat(r),{uris:["spotify:track:"+e]},{headers:{Authorization:localStorage.getItem("user_token")}});case 8:this.currentlyPlaying=e,this.$toast.success("".concat(s),{icon:"play_arrow"}),t.next=13;break;case 12:this.$toast.error("Otevři si nějaký zařízení");case 13:t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),this.$toast.error("Nastala chyba, zkus se, prosím, znovu přihlásit");case 18:case"end":return t.stop()}},t,this,[[0,15]])}));return function(e,s){return t.apply(this,arguments)}}()}},f=(s(172),Object(o.a)(g,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("nav",{staticClass:"nav"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],staticClass:"input input--search",attrs:{type:"search",placeholder:"Najdi umělce"},domProps:{value:t.searchQuery},on:{input:function(e){e.target.composing||(t.searchQuery=e.target.value)}}}),t._v(" "),s("a",{staticClass:"button",attrs:{href:"https://accounts.spotify.com/authorize?client_id=f254e3e7f8a74a1b9c5e3a683063f0dd&redirect_uri="+t.url+"/&scope=user-read-playback-state%20user-modify-playback-state%20user-top-read&response_type=token"}},[t._v("\n      PŘIHLÁSIT SE")])]),t._v(" "),s("main",{staticClass:"main"},[t.status&&0===Object.keys(t.artistsResults).length&&0===Object.keys(t.tracks).length?s("div",{staticClass:"status"},[t._v("\n      "+t._s(t.status)+"\n    ")]):t._e(),t._v(" "),t.tracks.length?s("div",{staticClass:"tracks"},[s("h2",[t._v("TOP 10 písniček seřazených podle danceability")]),t._v(" "),t._l(t.tracks,function(e){return s("div",{key:e.id,staticClass:"track"},[s("i",{staticClass:"track__play material-icons",on:{click:function(s){t.playTrack(e.id,e.name)}}},[t._v(t._s(e.id!==t.currentlyPlaying?"play_circle_outline":"play_arrow"))]),t._v(" "),t._l(e.album.images[0],function(e,a){return"url"===a?s("img",{key:a,staticClass:"img track__img",attrs:{src:e}}):t._e()}),t._v(" "),s("div",{staticClass:"track__info"},[s("div",{staticClass:"track__name"},[t._v(t._s(e.name))]),t._v(" "),s("div",{staticClass:"track__authors"},t._l(e.artists,function(a,r){return s("div",{key:r,staticClass:"track__authorName"},[t._v("\n              "+t._s(a.name)),r!==e.artists.length-1?s("span",[t._v(", ")]):t._e()])}))]),t._v(" "),s("div",{staticClass:"track__danceability"},[s("div",{staticClass:"track__danceabilityName"},[t._v("Danceability")]),t._v(" "),s("h3",{staticClass:"track__danceabilityNumber"},[t._v(t._s(Number(100*e.danceability).toFixed(0))+"%")])])],2)})],2):t._e(),t._v(" "),s("div",{staticClass:"results"},t._l(0!==Object.keys(t.artistsResults).length?t.artistsResults:0===Object.keys(t.tracks).length?t.usersFavorites:"",function(e){return s("a",{key:e.id,staticClass:"result",on:{click:function(s){t.getTopTracks(e.id)}}},[e.images[0]?s("div",{staticClass:"result__imgContainer"},t._l(e.images[0],function(e,a){return"url"===a?s("img",{key:a,staticClass:"img result__img",attrs:{src:e}}):t._e()})):s("div",{staticClass:"result__imgContainer"},[s("img",{staticClass:"img result__img",attrs:{src:"artist.png"}})]),t._v(" "),s("div",{staticClass:"result__name"},[t._v(t._s(e.name))])])}))])])},[],!1,null,null,null));f.options.__file="index.vue";e.default=f.exports}}]);