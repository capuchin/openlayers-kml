// $Id$

/**
 * @file
 * Main JS file for openlayers_kml
 *
 * @ingroup openlayers_kml
 */
Drupal.behaviors.openlayers_kml_vector_layer = function(context) {

  var data = $(context).data('openlayers');
  if (data && data.map.behaviors['openlayers_kml_vector_layer']) {
    var features = data.map.behaviors['openlayers_kml_vector_layer'].features;

    // Create options and layer
    var options = {
      drupalID: 'openlayers_kml_vector_layer'
    };
    var styleMap = Drupal.openlayers.getStyleMap(data.map, options.drupalID);
    var dataLayer = new OpenLayers.Layer.Vector(Drupal.t("Data Layer"), options);
    
    // Add features, styles, and layers
    dataLayer.styleMap = styleMap;

		var layer = new OpenLayers.Layer.GML("KML", features[0].kml, {
  	 format: OpenLayers.Format.KML,
		 projection: "EPSG:" + features[0].projection
		});

		data.openlayers.addLayer(layer);
  }
};
