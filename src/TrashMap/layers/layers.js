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
var format_TrashPoint_1 = new ol.format.GeoJSON();
var features_TrashPoint_1 = format_TrashPoint_1.readFeatures(json_TrashPoint_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5899'});
var jsonSource_TrashPoint_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrashPoint_1.addFeatures(features_TrashPoint_1);
var lyr_TrashPoint_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrashPoint_1, 
                style: style_TrashPoint_1,
                popuplayertitle: "TrashPoint",
                interactive: true,
                title: '<img src="styles/legend/TrashPoint_1.png" /> TrashPoint'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_TrashPoint_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_TrashPoint_1];
lyr_TrashPoint_1.set('fieldAliases', {'ID': 'ID', 'SIZE': 'SIZE', 'NAME': 'NAME', });
lyr_TrashPoint_1.set('fieldImages', {'ID': 'TextEdit', 'SIZE': 'TextEdit', 'NAME': 'TextEdit', });
lyr_TrashPoint_1.set('fieldLabels', {'ID': 'no label', 'SIZE': 'no label', 'NAME': 'inline label - always visible', });
lyr_TrashPoint_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});