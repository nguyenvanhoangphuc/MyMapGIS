ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:5899").setExtent([499151.230821, 1745730.060781, 607907.895504, 1801518.528159]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

lyr_OpenStreetMap_0.setVisible(true);
var layersList = [lyr_OpenStreetMap_0];
