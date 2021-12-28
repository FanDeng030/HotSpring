var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1, 
                style: style__1,
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> 鹼性水質'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__2, 
                style: style__2,
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> 酸性水質'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__3, 
                style: style__3,
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> 中性水質'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__4, 
                style: style__4,
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> 無資料'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__5, 
                style: style__5,
                interactive: true,
    title: '依出露岩層屬性<br />\
    <img src="styles/legend/_5_0.png" /> 火成岩區<br />\
    <img src="styles/legend/_5_1.png" /> 沉積岩區<br />\
    <img src="styles/legend/_5_2.png" /> 變質岩區<br />'
        });
var format__6 = new ol.format.GeoJSON();
var features__6 = format__6.readFeatures(json__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__6.addFeatures(features__6);
var lyr__6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__6, 
                style: style__6,
                interactive: true,
                title: '<img src="styles/legend/_6.png" /> 東部'
            });
var format__7 = new ol.format.GeoJSON();
var features__7 = format__7.readFeatures(json__7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__7.addFeatures(features__7);
var lyr__7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__7, 
                style: style__7,
                interactive: true,
                title: '<img src="styles/legend/_7.png" /> 南部'
            });
var format__8 = new ol.format.GeoJSON();
var features__8 = format__8.readFeatures(json__8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__8.addFeatures(features__8);
var lyr__8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__8, 
                style: style__8,
                interactive: true,
                title: '<img src="styles/legend/_8.png" /> 中部'
            });
var format__9 = new ol.format.GeoJSON();
var features__9 = format__9.readFeatures(json__9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__9.addFeatures(features__9);
var lyr__9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__9, 
                style: style__9,
                interactive: true,
                title: '<img src="styles/legend/_9.png" /> 北部'
            });
var format__10 = new ol.format.GeoJSON();
var features__10 = format__10.readFeatures(json__10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__10.addFeatures(features__10);
var lyr__10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__10, 
                style: style__10,
                interactive: true,
                title: '<img src="styles/legend/_10.png" /> 推薦溫泉'
            });
var format__11 = new ol.format.GeoJSON();
var features__11 = format__11.readFeatures(json__11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__11.addFeatures(features__11);
var lyr__11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__11, 
                style: style__11,
                interactive: true,
                title: '<img src="styles/legend/_11.png" /> 溫泉'
            });

lyr_GoogleMaps_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);lyr__6.setVisible(true);lyr__7.setVisible(true);lyr__8.setVisible(true);lyr__9.setVisible(true);lyr__10.setVisible(true);lyr__11.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr__1,lyr__2,lyr__3,lyr__4,lyr__5,lyr__6,lyr__7,lyr__8,lyr__9,lyr__10,lyr__11];
lyr__1.set('fieldAliases', {'溫泉名稱': '溫泉名稱', '溫泉PH值': '溫泉PH值', '溫泉溫度': '溫泉溫度', '出露岩層屬': '出露岩層屬', '溫泉性質': '溫泉性質', '行政區': '行政區', 'X座標(TWD9': 'X座標(TWD9', 'Y座標(TWD9': 'Y座標(TWD9', '經度(WGS84': '經度(WGS84', '緯度(WGS84': '緯度(WGS84', '高程': '高程', });
lyr__2.set('fieldAliases', {'溫泉名稱': '溫泉名稱', '溫泉PH值': '溫泉PH值', '溫泉溫度': '溫泉溫度', '出露岩層屬': '出露岩層屬', '溫泉性質': '溫泉性質', '行政區': '行政區', 'X座標(TWD9': 'X座標(TWD9', 'Y座標(TWD9': 'Y座標(TWD9', '經度(WGS84': '經度(WGS84', '緯度(WGS84': '緯度(WGS84', '高程': '高程', });
lyr__3.set('fieldAliases', {'溫泉名稱': '溫泉名稱', '溫泉PH值': '溫泉PH值', '溫泉溫度': '溫泉溫度', '出露岩層屬': '出露岩層屬', '溫泉性質': '溫泉性質', '行政區': '行政區', 'X座標(TWD9': 'X座標(TWD9', 'Y座標(TWD9': 'Y座標(TWD9', '經度(WGS84': '經度(WGS84', '緯度(WGS84': '緯度(WGS84', '高程': '高程', });
lyr__4.set('fieldAliases', {'溫泉名稱': '溫泉名稱', '溫泉PH值': '溫泉PH值', '溫泉溫度': '溫泉溫度', '出露岩層屬': '出露岩層屬', '溫泉性質': '溫泉性質', '行政區': '行政區', 'X座標(TWD9': 'X座標(TWD9', 'Y座標(TWD9': 'Y座標(TWD9', '經度(WGS84': '經度(WGS84', '緯度(WGS84': '緯度(WGS84', '高程': '高程', });
lyr__5.set('fieldAliases', {'溫泉名稱': '溫泉名稱', '溫泉PH值': '溫泉PH值', '溫泉溫度': '溫泉溫度', '出露岩層屬': '出露岩層屬', '溫泉性質': '溫泉性質', '行政區': '行政區', 'X座標(TWD9': 'X座標(TWD9', 'Y座標(TWD9': 'Y座標(TWD9', '經度(WGS84': '經度(WGS84', '緯度(WGS84': '緯度(WGS84', '高程': '高程', });
lyr__6.set('fieldAliases', {'溫泉名稱': '溫泉名稱', '溫泉PH值': '溫泉PH值', '溫泉溫度': '溫泉溫度', '出露岩層屬': '出露岩層屬', '溫泉性質': '溫泉性質', '行政區': '行政區', 'X座標(TWD9': 'X座標(TWD9', 'Y座標(TWD9': 'Y座標(TWD9', '經度(WGS84': '經度(WGS84', '緯度(WGS84': '緯度(WGS84', '高程': '高程', });
lyr__7.set('fieldAliases', {'溫泉名稱': '溫泉名稱', '溫泉PH值': '溫泉PH值', '溫泉溫度': '溫泉溫度', '出露岩層屬': '出露岩層屬', '溫泉性質': '溫泉性質', '行政區': '行政區', 'X座標(TWD9': 'X座標(TWD9', 'Y座標(TWD9': 'Y座標(TWD9', '經度(WGS84': '經度(WGS84', '緯度(WGS84': '緯度(WGS84', '高程': '高程', });
lyr__8.set('fieldAliases', {'溫泉名稱': '溫泉名稱', '溫泉PH值': '溫泉PH值', '溫泉溫度': '溫泉溫度', '出露岩層屬': '出露岩層屬', '溫泉性質': '溫泉性質', '行政區': '行政區', 'X座標(TWD9': 'X座標(TWD9', 'Y座標(TWD9': 'Y座標(TWD9', '經度(WGS84': '經度(WGS84', '緯度(WGS84': '緯度(WGS84', '高程': '高程', });
lyr__9.set('fieldAliases', {'溫泉名稱': '溫泉名稱', '溫泉PH值': '溫泉PH值', '溫泉溫度': '溫泉溫度', '出露岩層屬': '出露岩層屬', '溫泉性質': '溫泉性質', '行政區': '行政區', 'X座標(TWD9': 'X座標(TWD9', 'Y座標(TWD9': 'Y座標(TWD9', '經度(WGS84': '經度(WGS84', '緯度(WGS84': '緯度(WGS84', '高程': '高程', });
lyr__10.set('fieldAliases', {'溫泉名稱': '溫泉名稱', '溫泉PH值': '溫泉PH值', '溫泉溫度': '溫泉溫度', '出露岩層屬': '出露岩層屬', '溫泉性質': '溫泉性質', '行政區': '行政區', 'X座標(TWD9': 'X座標(TWD9', 'Y座標(TWD9': 'Y座標(TWD9', '經度(WGS84': '經度(WGS84', '緯度(WGS84': '緯度(WGS84', '高程': '高程', });
lyr__11.set('fieldAliases', {'溫泉名稱': '溫泉名稱', '溫泉PH值': '溫泉PH值', '溫泉溫度': '溫泉溫度', '出露岩層屬': '出露岩層屬', '溫泉性質': '溫泉性質', '行政區': '行政區', 'X座標(TWD9': 'X座標(TWD9', 'Y座標(TWD9': 'Y座標(TWD9', '經度(WGS84': '經度(WGS84', '緯度(WGS84': '緯度(WGS84', '高程': '高程', });
lyr__1.set('fieldImages', {'溫泉名稱': '', '溫泉PH值': '', '溫泉溫度': '', '出露岩層屬': '', '溫泉性質': '', '行政區': '', 'X座標(TWD9': '', 'Y座標(TWD9': '', '經度(WGS84': '', '緯度(WGS84': '', '高程': '', });
lyr__2.set('fieldImages', {'溫泉名稱': '', '溫泉PH值': '', '溫泉溫度': '', '出露岩層屬': '', '溫泉性質': '', '行政區': '', 'X座標(TWD9': '', 'Y座標(TWD9': '', '經度(WGS84': '', '緯度(WGS84': '', '高程': '', });
lyr__3.set('fieldImages', {'溫泉名稱': '', '溫泉PH值': '', '溫泉溫度': '', '出露岩層屬': '', '溫泉性質': '', '行政區': '', 'X座標(TWD9': '', 'Y座標(TWD9': '', '經度(WGS84': '', '緯度(WGS84': '', '高程': '', });
lyr__4.set('fieldImages', {'溫泉名稱': '', '溫泉PH值': '', '溫泉溫度': '', '出露岩層屬': '', '溫泉性質': '', '行政區': '', 'X座標(TWD9': '', 'Y座標(TWD9': '', '經度(WGS84': '', '緯度(WGS84': '', '高程': '', });
lyr__5.set('fieldImages', {'溫泉名稱': 'TextEdit', '溫泉PH值': 'TextEdit', '溫泉溫度': 'TextEdit', '出露岩層屬': 'TextEdit', '溫泉性質': 'TextEdit', '行政區': 'TextEdit', 'X座標(TWD9': 'TextEdit', 'Y座標(TWD9': 'TextEdit', '經度(WGS84': 'TextEdit', '緯度(WGS84': 'TextEdit', '高程': 'TextEdit', });
lyr__6.set('fieldImages', {'溫泉名稱': 'TextEdit', '溫泉PH值': 'TextEdit', '溫泉溫度': 'TextEdit', '出露岩層屬': 'TextEdit', '溫泉性質': 'TextEdit', '行政區': 'TextEdit', 'X座標(TWD9': 'TextEdit', 'Y座標(TWD9': 'TextEdit', '經度(WGS84': 'TextEdit', '緯度(WGS84': 'TextEdit', '高程': 'TextEdit', });
lyr__7.set('fieldImages', {'溫泉名稱': 'TextEdit', '溫泉PH值': 'TextEdit', '溫泉溫度': 'TextEdit', '出露岩層屬': 'TextEdit', '溫泉性質': 'TextEdit', '行政區': 'TextEdit', 'X座標(TWD9': 'TextEdit', 'Y座標(TWD9': 'TextEdit', '經度(WGS84': 'TextEdit', '緯度(WGS84': 'TextEdit', '高程': 'TextEdit', });
lyr__8.set('fieldImages', {'溫泉名稱': 'TextEdit', '溫泉PH值': 'TextEdit', '溫泉溫度': 'TextEdit', '出露岩層屬': 'TextEdit', '溫泉性質': 'TextEdit', '行政區': 'TextEdit', 'X座標(TWD9': 'TextEdit', 'Y座標(TWD9': 'TextEdit', '經度(WGS84': 'TextEdit', '緯度(WGS84': 'TextEdit', '高程': 'TextEdit', });
lyr__9.set('fieldImages', {'溫泉名稱': 'TextEdit', '溫泉PH值': 'TextEdit', '溫泉溫度': 'TextEdit', '出露岩層屬': 'TextEdit', '溫泉性質': 'TextEdit', '行政區': 'TextEdit', 'X座標(TWD9': 'TextEdit', 'Y座標(TWD9': 'TextEdit', '經度(WGS84': 'TextEdit', '緯度(WGS84': 'TextEdit', '高程': 'TextEdit', });
lyr__10.set('fieldImages', {'溫泉名稱': 'TextEdit', '溫泉PH值': 'TextEdit', '溫泉溫度': 'TextEdit', '出露岩層屬': 'TextEdit', '溫泉性質': 'TextEdit', '行政區': 'TextEdit', 'X座標(TWD9': 'TextEdit', 'Y座標(TWD9': 'TextEdit', '經度(WGS84': 'TextEdit', '緯度(WGS84': 'TextEdit', '高程': 'TextEdit', });
lyr__11.set('fieldImages', {'溫泉名稱': 'TextEdit', '溫泉PH值': 'TextEdit', '溫泉溫度': 'TextEdit', '出露岩層屬': 'TextEdit', '溫泉性質': 'TextEdit', '行政區': 'TextEdit', 'X座標(TWD9': 'TextEdit', 'Y座標(TWD9': 'TextEdit', '經度(WGS84': 'TextEdit', '緯度(WGS84': 'TextEdit', '高程': 'TextEdit', });
lyr__1.set('fieldLabels', {'溫泉名稱': 'inline label', '溫泉PH值': 'inline label', '溫泉溫度': 'inline label', '出露岩層屬': 'inline label', '溫泉性質': 'inline label', '行政區': 'inline label', 'X座標(TWD9': 'no label', 'Y座標(TWD9': 'no label', '經度(WGS84': 'no label', '緯度(WGS84': 'no label', '高程': 'no label', });
lyr__2.set('fieldLabels', {'溫泉名稱': 'inline label', '溫泉PH值': 'inline label', '溫泉溫度': 'inline label', '出露岩層屬': 'inline label', '溫泉性質': 'inline label', '行政區': 'inline label', 'X座標(TWD9': 'no label', 'Y座標(TWD9': 'no label', '經度(WGS84': 'no label', '緯度(WGS84': 'no label', '高程': 'no label', });
lyr__3.set('fieldLabels', {'溫泉名稱': 'inline label', '溫泉PH值': 'inline label', '溫泉溫度': 'inline label', '出露岩層屬': 'inline label', '溫泉性質': 'inline label', '行政區': 'inline label', 'X座標(TWD9': 'no label', 'Y座標(TWD9': 'no label', '經度(WGS84': 'no label', '緯度(WGS84': 'no label', '高程': 'no label', });
lyr__4.set('fieldLabels', {'溫泉名稱': 'inline label', '溫泉PH值': 'inline label', '溫泉溫度': 'inline label', '出露岩層屬': 'inline label', '溫泉性質': 'inline label', '行政區': 'inline label', 'X座標(TWD9': 'no label', 'Y座標(TWD9': 'no label', '經度(WGS84': 'no label', '緯度(WGS84': 'no label', '高程': 'no label', });
lyr__5.set('fieldLabels', {'溫泉名稱': 'inline label', '溫泉PH值': 'inline label', '溫泉溫度': 'inline label', '出露岩層屬': 'inline label', '溫泉性質': 'inline label', '行政區': 'inline label', 'X座標(TWD9': 'no label', 'Y座標(TWD9': 'no label', '經度(WGS84': 'no label', '緯度(WGS84': 'no label', '高程': 'no label', });
lyr__6.set('fieldLabels', {'溫泉名稱': 'inline label', '溫泉PH值': 'inline label', '溫泉溫度': 'inline label', '出露岩層屬': 'inline label', '溫泉性質': 'inline label', '行政區': 'inline label', 'X座標(TWD9': 'inline label', 'Y座標(TWD9': 'inline label', '經度(WGS84': 'inline label', '緯度(WGS84': 'inline label', '高程': 'inline label', });
lyr__7.set('fieldLabels', {'溫泉名稱': 'inline label', '溫泉PH值': 'inline label', '溫泉溫度': 'inline label', '出露岩層屬': 'inline label', '溫泉性質': 'inline label', '行政區': 'inline label', 'X座標(TWD9': 'inline label', 'Y座標(TWD9': 'inline label', '經度(WGS84': 'inline label', '緯度(WGS84': 'inline label', '高程': 'inline label', });
lyr__8.set('fieldLabels', {'溫泉名稱': 'inline label', '溫泉PH值': 'inline label', '溫泉溫度': 'inline label', '出露岩層屬': 'inline label', '溫泉性質': 'inline label', '行政區': 'inline label', 'X座標(TWD9': 'inline label', 'Y座標(TWD9': 'inline label', '經度(WGS84': 'inline label', '緯度(WGS84': 'inline label', '高程': 'inline label', });
lyr__9.set('fieldLabels', {'溫泉名稱': 'inline label', '溫泉PH值': 'inline label', '溫泉溫度': 'inline label', '出露岩層屬': 'inline label', '溫泉性質': 'inline label', '行政區': 'inline label', 'X座標(TWD9': 'inline label', 'Y座標(TWD9': 'inline label', '經度(WGS84': 'inline label', '緯度(WGS84': 'inline label', '高程': 'inline label', });
lyr__10.set('fieldLabels', {'溫泉名稱': 'inline label', '溫泉PH值': 'inline label', '溫泉溫度': 'inline label', '出露岩層屬': 'inline label', '溫泉性質': 'inline label', '行政區': 'inline label', 'X座標(TWD9': 'inline label', 'Y座標(TWD9': 'inline label', '經度(WGS84': 'inline label', '緯度(WGS84': 'inline label', '高程': 'inline label', });
lyr__11.set('fieldLabels', {'溫泉名稱': 'inline label', '溫泉PH值': 'inline label', '溫泉溫度': 'inline label', '出露岩層屬': 'inline label', '溫泉性質': 'inline label', '行政區': 'inline label', 'X座標(TWD9': 'inline label', 'Y座標(TWD9': 'inline label', '經度(WGS84': 'inline label', '緯度(WGS84': 'inline label', '高程': 'inline label', });
lyr__11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});