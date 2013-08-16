function PurseController(purse) {
	if(purse == undefined){
		this.purse = new Purse();
	} else {
		this.purse = purse
	}
	
	this.element = '#coin_output tbody';
	this.error   = '#coin_error';
}

PurseController.prototype.actionView = function(input) {

	var view_options = {};
	//if we have a input value passed, convert result
	if(input != undefined){
		var pennies 			= this.purse.toPennies(input);
		var money_needed		= this.purse.toSterling(pennies);
		view_options		 	= money_needed;
	}
	
	this.render(this.element,view_options);

}

PurseController.prototype.render = function(element,options) {
	view = new PurseView(element, options);
}