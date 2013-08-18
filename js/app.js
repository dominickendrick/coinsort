requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js',

    paths: {
        lib: 			'lib',
		views: 			'src/views',
		models: 		'src/models',
		controllers:    'src/controllers',
		utils: 			'src/utils'
    }
});

// Start the main app logic.
requirejs(['lib/jquery', 'utils/Utils', 'views/ErrorView', 'views/PurseView', 'controllers/PurseController', 'models/Purse','models/Pound'],
function  () {

	  $( document ).ready(function() {	
		$('#coin_sort_submit').on('click', function(){	
			purse = new PurseController();
			purse.actionView($('#coin_sort_text').val());
			return false;
		});
	
	});
});


