require(["esri/request", "esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer"], function (
    esriRequest,
    Map,
    MapView,
    FeatureLayer
  ) {
    var url =
      "https://manor-straits-staging.softkraft.net/api/v1/bounding-boxes/?inBbox=38.41055825094609,-80.51879882812501,41.4509614012039,-69.48852539062501&unitsMin=0&unitsMax=10000&strOccupancyMin=0&strOccupancyMax=100&zoom=7";
  
    esriRequest(url, {
      responseType: "json"
    }).then(function (response) {
      // The requested data
      console.log(response);
      var geoJson = response.data;
    });

    const layer = new FeatureLayer({
      url:
        "https://services3.arcgis.com/dK56ZPamZjkXZiRb/arcgis/rest/services/sample_africa_vaccine_hack/FeatureServer"
    });
  
    var map = new Map({
      basemap: "gray",
      layers: [layer]
    });
  
    var view = new MapView({
      container: "viewDiv",
      map: map,
      zoom: 4,
      center: [20, 0.9394] // longitude, latitude
    });
  });