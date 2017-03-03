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

    // load clustergram

    make_clust('mult_view.json');

    var about_string = 'Zoom, scroll, and click buttons to interact with the clustergram. <a href="http://amp.pharm.mssm.edu/clustergrammer/help"> <i class="fa fa-question-circle" aria-hidden="true"></i> </a>';

    function make_clust(inst_network){

        d3.json('json/'+inst_network, function(network_data){

          // define arguments object
          var args = {
            root: '#container-id-1',
            'network_data': network_data,
            'about':about_string,
            // 'row_tip_callback':hzome.gene_info,
            // 'col_tip_callback':test_col_callback,
            // 'tile_tip_callback':test_tile_callback,
            // 'dendro_callback':dendro_callback,
            // 'matrix_update_callback':matrix_update_callback,
            'sidebar_width':150,
            // 'ini_view':{'N_row_var':20}
          };

          // cgm = Clustergrammer(args);

          // check_setup_enrichr(cgm);

          // d3.select(cgm.params.root + ' .wait_message').remove();

          debugger;

      });

    }

  });