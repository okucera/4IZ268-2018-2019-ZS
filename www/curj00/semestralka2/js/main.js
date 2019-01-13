// var obrazek = "https://api.mapy.cz/img/api/marker/drop-red.png";
var obrazek = "img/drop-vw.png";
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

// Možnost typ změnit mapu
var layerSwitch = new SMap.Control.Layer();
layerSwitch.addDefaultLayer(SMap.DEF_BASE);
layerSwitch.addDefaultLayer(SMap.DEF_OPHOTO);
layerSwitch.addDefaultLayer(SMap.DEF_TURIST);
layerSwitch.addDefaultLayer(SMap.DEF_OPHOTO0406);
layerSwitch.addDefaultLayer(SMap.DEF_OPHOTO0203);
layerSwitch.addDefaultLayer(SMap.DEF_HISTORIC);
mapa.addControl(layerSwitch, { left: "10px", top: "7px" });

var data = {
    "NH Car": "50°5'1.732\"N, 14°23'3.251\"E",
    "Porsche Praha Smíchov": "50°4'10.489\"N, 14°22'41.630\"E",
    "Porsche Praha Prosek": "50°7'55.227\"N, 14°29'30.433\"E",
    "Auto Jarov": "50°5'25.698\"N, 14°29'56.907\"E",
    "Auto Podbabská Praha": "50°6'52.443\"N, 14°23'30.614\"E",
    "Autosalon Klokočka Centrum": "50°4'35.496\"N, 14°17'56.176\"E",
    "TUkas": "50°0'7.182\"N, 14°24'45.595\"E",
    "AUTO JAROV KUNRATICE": "50°0'38.903\"N, 14°28'36.962\"E",
    "Louda Auto Praha": "50°6'29.972\"N, 14°32'54.237\"E",
    "Auto I.S.R.": "50°0'18.520\"N, 14°34'10.862\"E"
};
var znacky = [];
var souradnice = [];

for (var name in data) { /* Vyrobit značky */
    var c = SMap.Coords.fromWGS84(data[name]); /* Souřadnice značky, z textového formátu souřadnic */

    var options = {
        url: obrazek,
        title: name,
        anchor: { left: 10, bottom: 1 }  /* Ukotvení značky za bod uprostřed dole */
    }

    var znacka = new SMap.Marker(c, null, options);
    souradnice.push(c);
    znacky.push(znacka);
}


/* NH Car ukotvíme za střed značky, přestože neznáme její velikost */
var options = {
    anchor: { left: 0.5, top: 0.5 }
}
znacky[1].decorate(SMap.Marker.Feature.RelativeAnchor, options);

var vrstva = new SMap.Layer.Marker();     /* Vrstva se značkami */
mapa.addLayer(vrstva);                          /* Přidat ji do mapy */
vrstva.enable();                         /* A povolit */
for (var i = 0; i < znacky.length; i++) {
    vrstva.addMarker(znacky[i]);
}

var cz = mapa.computeCenterZoom(souradnice); /* Spočítat pozici mapy tak, aby značky byly vidět */
mapa.setCenterZoom(cz[0], cz[1]);

var nalezeno = function (route) {
    var vrstva = new SMap.Layer.Geometry();
    mapa.addLayer(vrstva).enable();

    var coords = route.getResults().geometry;
    var cz = mapa.computeCenterZoom(coords);
    mapa.setCenterZoom(cz[0], cz[1]);
    var g = new SMap.Geometry(SMap.GEOMETRY_POLYLINE, null, coords);
    vrstva.addGeometry(g);
}

var coords = [
    SMap.Coords.fromWGS84(14.3579142, 50.0479742),
    SMap.Coords.fromWGS84(14.4917869, 50.1320075)
];
var route = new SMap.Route(coords, nalezeno);
