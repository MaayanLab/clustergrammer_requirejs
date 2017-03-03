require.config({
    baseURL: 'scripts/',
    paths: {
      'underscore': 'underscore-min'
       },
    shim: {
            underscore: {
              exports: '_'
            }
          }
      })

require(['underscore'], function (_) {

    console.log(_)

    console.log('here')

  });