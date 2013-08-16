$( document ).ready(function() {
	
	$('#coin_sort_submit').on('click', function(){

		purse = new PurseController();
		purse.actionView($('#coin_sort_text').val());

		return false;
	});

});