require.config({
    baseURL: 'scripts/',
    paths: {
      'underscore': 'underscore-min',
      'jquery': 'jquery-1.11.2.min',
       },
    shim: {
            underscore: {
              exports: '_'
            }
          }
      })

require(['underscore', 'jquery', 'd3', 'clustergrammer'], function (_, $, d3, clustergrammer) {

    console.log(_)
    console.log($)
    console.log(clustergrammer)

  });