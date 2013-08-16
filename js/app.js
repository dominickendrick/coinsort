$( document ).ready(function() {
	
	$('#coin_sort_submit').on('click', function(){
		if( $('#coin_sort_text').val()){
			purse = new PurseController();
			purse.actionView($('#coin_sort_text').val());
			return false;
		}
		return false;
	});

});