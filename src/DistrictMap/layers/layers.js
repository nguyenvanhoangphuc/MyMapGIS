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
var format_QUanHuyen_1 = new ol.format.GeoJSON();
var features_QUanHuyen_1 = format_QUanHuyen_1.readFeatures(json_QUanHuyen_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5899'});
var jsonSource_QUanHuyen_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QUanHuyen_1.addFeatures(features_QUanHuyen_1);
var lyr_QUanHuyen_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QUanHuyen_1, 
                style: style_QUanHuyen_1,
                popuplayertitle: "QUan-Huyen",
                interactive: true,
                title: '<img src="styles/legend/QUanHuyen_1.png" /> QUan-Huyen'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_QUanHuyen_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_QUanHuyen_1];
lyr_QUanHuyen_1.set('fieldAliases', {'NAME_3': 'NAME_3', 'NAME_1': 'NAME_1', 'NAME_2': 'NAME_2', 'TYPE_3': 'TYPE_3', });
lyr_QUanHuyen_1.set('fieldImages', {'NAME_3': 'TextEdit', 'NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_3': 'TextEdit', });
lyr_QUanHuyen_1.set('fieldLabels', {'NAME_3': 'no label', 'NAME_1': 'inline label - always visible', 'NAME_2': 'no label', 'TYPE_3': 'no label', });
lyr_QUanHuyen_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});