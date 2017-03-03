require.config({
    baseURL: 'scripts/',
    paths: {
      'leaflet': 'https://unpkg.com/leaflet@1.0.2/dist/leaflet',
      'underscore': 'underscore-min'
       },
    shim: {
            leaflet: {
              exports: 'L'
                     },
            underscore: {
              exports: '_'
            }
          }
      })

require(['leaflet', 'underscore'], function (L, _) {

  // seattle = {lat: 47.59,    long: -122.335167, zoom: 12};
  // denver  = {lat: 39.74739, long: -105,        zoom: 13};
  // loc = seattle;

  // var map = L.map('mapDiv').setView([loc.lat, loc.long], loc.zoom);
  // var mapURI = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw';

  // L.tileLayer(mapURI, {
  //            maxZoom: 18,
  //            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
  //                          '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
  //                          'Imagery © <a href="http://mapbox.com">Mapbox</a>',
  //            id: 'mapbox.light'
  //    }).addTo(map);

    console.log(_)

  }); // require