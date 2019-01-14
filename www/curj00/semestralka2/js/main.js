// var obrazek = "https://api.mapy.cz/img/api/marker/drop-red.png";
var obrazek = "img/drop-vw.png";
var obrazek_start = "img/drop-vw2.png";
var mapa = new SMap(JAK.gel("mapa"));
mapa.addControl(new SMap.Control.Sync()); /* Aby mapa reagovala na změnu velikosti průhledu */
mapa.addDefaultLayer(SMap.DEF_BASE).enable(); /* Turistický podklad */
mapa.addDefaultControls(); /* Ovládací prvky v pravém horní rohu mapy */
var mouse = new SMap.Control.Mouse(SMap.MOUSE_PAN | SMap.MOUSE_WHEEL | SMap.MOUSE_ZOOM); /* Ovládání myší */
mapa.addControl(mouse);
mapa.addDefaultLayer(SMap.DEF_OPHOTO);
mapa.addDefaultLayer(SMap.DEF_TURIST);
mapa.addDefaultLayer(SMap.DEF_HISTORIC);
mapa.addDefaultLayer(SMap.DEF_OPHOTO0203);
mapa.addDefaultLayer(SMap.DEF_OPHOTO0406);

// Možnost změnit typ mapy
var layerSwitch = new SMap.Control.Layer();
layerSwitch.addDefaultLayer(SMap.DEF_BASE);
layerSwitch.addDefaultLayer(SMap.DEF_OPHOTO);
layerSwitch.addDefaultLayer(SMap.DEF_TURIST);
layerSwitch.addDefaultLayer(SMap.DEF_OPHOTO0406);
layerSwitch.addDefaultLayer(SMap.DEF_OPHOTO0203);
layerSwitch.addDefaultLayer(SMap.DEF_HISTORIC);
mapa.addControl(layerSwitch, { left: "10px", top: "7px" });

var data = [{
    name: "NH Car",
    id: 1,
    coords: "50°5'1.732\"N, 14°23'3.251\"E"
}, {
    name: "Porsche Praha Smíchov",
    id: 2,
    coords: "50°4'10.489\"N, 14°22'41.630\"E"
}, {
    name: "Porsche Praha Prosek",
    id: 3,
    coords: "50°7'55.227\"N, 14°29'30.433\"E"
}, {
    name: "Auto Jarov",
    id: 4,
    coords: "50°5'25.698\"N, 14°29'56.907\"E"
}, {
    name: "Auto Podbabská Praha",
    id: 5,
    coords: "50°6'52.443\"N, 14°23'30.614\"E"
}, {
    name: "Autosalon Klokočka Centrum",
    id: 6,
    coords: "50°4'35.496\"N, 14°17'56.176\"E"
}, {
    name: "TUkas",
    id: 7,
    coords: "50°0'7.182\"N, 14°24'45.595\"E"
}, {
    name: "AUTO JAROV KUNRATICE",
    id: 8,
    coords: "50°0'38.903\"N, 14°28'36.962\"E"
}, {
    name: "Louda Auto Praha",
    id: 9,
    coords: "50°6'29.972\"N, 14°32'54.237\"E"
}, {
    name: "Auto I.S.R.",
    id: 10,
    coords: "50°0'18.520\"N, 14°34'10.862\"E"
}, {
    name: "TOP CENTRUM Car",
    id: 11,
    coords: "48°52'20.365\"N, 17°6'56.297\"E"
}, {
    name: "CB Auto",
    id: 12,
    coords: "48°58'44.498\"N, 14°26'28.316\"E"
}, {
    name: "Porsche České Budějovice",
    id: 13,
    coords: "49°00'06.0\"N, 14°29'08.9\"E"
}, {
    name: "Auto - Bayer",
    id: 14,
    coords: "49°09'09.7\"N, 16°53'35.7\"E"
}, {
    name: "Porsche Brno",
    id: 15,
    coords: "49°10'40.4\"N, 16°40'30.3\"E"
}, {
    name: "ROS Brno",
    id: 16,
    coords: "49°11'11.0\"N, 16°35'25.8\"E"
}, {
    name: "Euro Car Zlín",
    id: 17,
    coords: "49°13'26.8\"N, 17°42'03.4\"E"
}, {
    name: "Samohýl Motor",
    id: 18,
    coords: "49°13'3.247\"N, 17°37'42.570\"E"
}, {
    name: "Samohýl Motor",
    id: 19,
    coords: "49°13'3.247\"N, 17°37'42.570\"E"
}, {
    name: "Auto Vysočina",
    id: 20,
    coords: "49°23'40.0\"N, 15°34'00.4\"E"
}, {
    name: "CB Auto Tábor",
    id: 21,
    coords: "49°23'43.945\"N, 14°41'12.562\"E"
}, {
    name: "Intermobil",
    id: 22,
    coords: "49°23'43.945\"N, 14°41'12.562\"E"
}, {
    name: "Car Point Domažlice",
    id: 23,
    coords: "49°25'58.7\"N, 12°57'10.5\"E"
}, {
    name: "Autocentrum Jan Šmucler Horšovský Týn",
    id: 24,
    coords: "49°31'39.2\"N, 12°56'52.3\"E"
}, {
    name: "Autocentrum Olomouc",
    id: 25,
    coords: "49°34'26.0\"N, 17°13'56.0\"E"
}, {
    name: "Araver",
    id: 26,
    coords: "49°4'27.175\"N, 17°27'24.445\"E"
}, {
    name: "Porsche Plzeň",
    id: 27,
    coords: "49°43'30.7\"N, 13°20'43.4\"E"
}, {
    name: "Autocentrum Jan Šmucler",
    id: 28,
    coords: "49°44'8.681\"N, 13°21'18.633\"E"
}, {
    name: "Louda Auto Svitavy",
    id: 29,
    coords: "49°45'16.931\"N, 16°27'54.932\"E"
}, {
    name: "Auto Heller Ostrava",
    id: 30,
    coords: "49°50'26.7\"N, 18°16'25.9\"E"
}, {
    name: "Auto Heller Opava",
    id: 31,
    coords: "49°57'08.5\"N, 17°52'09.9\"E"
}, {
    name: "Fortex",
    id: 32,
    coords: "49°57'20.548\"N, 16°57'50.342\"E"
}, {
    name: "Autocentrum Barth Pardubice",
    id: 33,
    coords: "50°02'49.5\"N, 15°48'31.9\"E"
}, {
    name: "Louda Auto Pardubice",
    id: 34,
    coords: "50°03'15.5\"N, 15°46'08.2\"E"
}, {
    name: "AMOND Kladno",
    id: 35,
    coords: "50°8'30.399\"N, 14°3'40.436\"E"
}, {
    name: "Louda Auto Poděbrady",
    id: 36,
    coords: "50°08'42.0\"N, 15°10'15.5\"E"
}, {
    name: "Autocentrum Barth Hradec Králové",
    id: 37,
    coords: "50°11'21.3\"N, 15°50'58.5\"E"
}, {
    name: "Olfin Car Hradec Králové",
    id: 38,
    coords: "50°11'43.029\"N, 15°48'48.207\"E"
}, {
    name: "Car Point  Karlovy Vary",
    id: 39,
    coords: "50°13'41.6\"N, 12°49'54.8\"E"
}, {
    name: "Gerhard Horejsek Litoměřice",
    id: 40,
    coords: "50°30'55.0\"N, 14°08'12.9\"E"
}, {
    name: "Olfin Car Trutnov",
    id: 41,
    coords: "50°33'12.0\"N, 15°54'15.4\"E"
}, {
    name: "Louda Auto Teplice",
    id: 42,
    coords: "50°39'44.5\"N, 13°52'26.0\"E"
}, {
    name: "Gerhard Horejsek Česká Lípa",
    id: 43,
    coords: "50°40'41.7\"N, 14°32'39.4\"E"
}, {
    name: "Gerhard Horejsek Děčín",
    id: 44,
    coords: "50°46'35.5\"N, 14°13'04.2\"E"
}, {
    name: "Manfred Schoner autoservis",
    id: 45,
    coords: "50°5'10.807\"N, 12°24'6.505\"E"
}, {
    name: "Louda Auto Praha",
    id: 46,
    coords: "50°6'29.972\"N, 14°32'54.237\"E"
}, {
    name: "Autotrend",
    id: 47,
    coords: "50°44'36.438\"N, 15°2'53.052\"E"
}];

var znacky = [];
var souradnice = [];
var startovniBod;

data.forEach(function (marker) { /* Vyrobit markery */
    var c = SMap.Coords.fromWGS84(marker.coords); /* Souřadnice značky, z textového formátu souřadnic fromWGS84(14.297847, 50.076322);*/
    var options = {
        url: obrazek,
        title: marker.name,
        anchor: { left: 10, bottom: 1 }  /* Ukotvení značky za bod uprostřed dole */
    }
    // Důležité je přiřazení ID jednotlivým markerům - vlastní ID, jinak se generuje nahodne
    var znacka = new SMap.Marker(c, marker.id, options);
    souradnice.push(c);
    znacky.push(znacka);
});

/* NH Car ukotvíme za střed značky, přestože neznáme její velikost */
// var options = {
//     anchor: { left: 0.5, top: 0.5 }
// }
// znacky[1].decorate(SMap.Marker.Feature.RelativeAnchor, options);


var vrstva = new SMap.Layer.Marker();     /* Vrstva se značkami */
mapa.addLayer(vrstva);                          /* Přidat ji do mapy */
vrstva.enable();                         /* A povolit */
for (var i = 0; i < znacky.length; i++) {
    vrstva.addMarker(znacky[i]);
    var card = new SMap.Card();
    card.getBody().innerHTML = "<br>Prodejce Volkswagen";
    card.setSize(270, 90);
    card.getHeader().innerHTML = "<strong>" + data[i].name + "</strong>";
    znacky[i].decorate(SMap.Marker.Feature.Card, card);
}



var cz = mapa.computeCenterZoom(souradnice); /* Spočítat pozici mapy tak, aby značky byly vidět */
//mapa.setCenterZoom(cz[0], cz[1]);
var trasa;
var vrstvaSTrasou = new SMap.Layer.Geometry();
mapa.addLayer(vrstvaSTrasou).enable();

var nalezeno = function (route) {
    var coords = route.getResults().geometry;
    var cz = mapa.computeCenterZoom(coords);
    mapa.setCenterZoom(cz[0], cz[1]);
    if (trasa != null) {
        vrstvaSTrasou.removeGeometry(trasa);
    }
    trasa = new SMap.Geometry(SMap.GEOMETRY_POLYLINE, null, coords);
    vrstvaSTrasou.addGeometry(trasa);
}

var markerClicked = false;
var endPointCoords;

function handleMarkerClick(e) { /* Kliknutí na marker */
    markerClicked = true;
    // Vybraný marker
    var marker = e.target;
    var id = marker.getId();
    loadDoc(id);
    // Párovaní vybraného markeru pomocí jeho ID a našich vstupních dat.
    for (var i = 0; i < data.length; i++) {
        if (data[i].id == id) {
            endPointCoords = SMap.Coords.fromWGS84(data[i].coords);
            break;
        }
    }
    var startPointCoords;
    if (startovniBod != null) {
        // Máme startovní bod, najdeme trasu.
        startPointCoords = startovniBod._coords;
    } else {
        // Nemáme startovní bod, najdeme trasu ze středu mapy a přidáme tam marker.
        startPointCoords = SMap.Coords.fromWGS84(14.3573103, 50.0479011);
        var options = {
            url: obrazek_start,
            title: "Startovní bod",
            anchor: { left: 10, bottom: 1 }  /* Ukotvení značky za bod uprostřed dole */
        };
        startovniBod = new SMap.Marker(startPointCoords, null, options);
        startovniBod.decorate(SMap.Marker.Feature.Draggable);
        vrstva.addMarker(startovniBod);
    }
    var coords = [startPointCoords, endPointCoords];
    var route = new SMap.Route(coords, nalezeno);
}

function handleMapClick(e) { /* Kliknutí do mapy */
    // Ten if je tady aby se neregistrovaly kliknutí na markery jako kliknutí do
    // mapy. Kdyby tady ten if nebyl, tak by každé kliknutí na marker zároveň bylo
    // registrováno jako kliknutí do mapy a přidalo by to výchozí bod někam k
    // markeru, na který se kliknulo (a to nechceme).
    if (markerClicked) {
        // Uživatel kliknul na marker. Nechceme přidat výchozí bod na mapu, ale
        // aspoň nastavíme atribut markerClicked na false, aby při příštím kliknutí
        // na mapu byl vybrán bod na mapě. Když příště uživatel zase klikne na
        // marker, žádný bod se na mapu zase nepřidá.
        markerClicked = false;
    } else {
        // Souřadnice bodu kam se kliknulo
        var startPointCoords = SMap.Coords.fromEvent(e.data.event, mapa);
        if (startovniBod != null) {
            // Odstraníme starý startovní bod
            vrstva.removeMarker(startovniBod);
        }
        var options = {
            url: obrazek_start,
            title: "Startovní bod",
            anchor: { left: 10, bottom: 1 }  /* Ukotvení značky za bod uprostřed dole */
        };
        startovniBod = new SMap.Marker(startPointCoords, null, options);
        startovniBod.decorate(SMap.Marker.Feature.Draggable);
        vrstva.addMarker(startovniBod);
        if (trasa != null) {
            // Už jsme dřív našli nějakou trasu, tak ji teď přepočítáme pro nový
            // startovní bod.
            var coords = [startPointCoords, endPointCoords];
            var route = new SMap.Route(coords, nalezeno);
        }
    }
}

function start(e) { /* Začátek tažení */
    var node = e.target.getContainer();
    node[SMap.LAYER_MARKER].style.cursor = "default";
}

function stop(e) { /* Konec tažení */
    var node = e.target.getContainer();
    node[SMap.LAYER_MARKER].style.cursor = "pointer";
    var startPointCoords = e.target.getCoords();
    if (trasa != null) {
        var coords = [startPointCoords, endPointCoords];
        var route = new SMap.Route(coords, nalezeno);
    }
}

var signals = mapa.getSignals();
signals.addListener(window, "marker-drag-stop", stop);
signals.addListener(window, "marker-drag-start", start);
signals.addListener(this, "marker-click", handleMarkerClick);
signals.addListener(this, "map-click", handleMapClick);

function loadDoc(id) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) { // DONE and Success
            var jsonResponse = JSON.parse(this.responseText);
            jsonResponse.forEach(function (marker) {
                if (marker.id == id) {
                    document.getElementById("ajax").innerHTML = marker.name + ", popis: " + marker.popis;
                }
            });
        }
    };
    xhttp.open("GET", "txt/data.txt", true);
    xhttp.send();
}