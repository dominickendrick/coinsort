function PurseController(purse) {
	this.utils = new Utils;
	if(purse == undefined){
		this.purse = new Purse();
	} else {
		this.purse = purse
	}
	
	this.element = 'div#coin_output';
}

PurseController.prototype.actionView = function(input) {

	//if we have a input value passed, convert result
	if(input != undefined){
		var pennies 			= this.purse.toPennies(input);
		var money_needed		= this.purse.toSterling(pennies);
	} 

	//if nothing is returned, render an error
	if(this.utils.isEmptyObject(money_needed)){
		this.render('ErrorView',this.element,[]);
	} else {
		this.render('PurseView',this.element,money_needed);
	}
	
}

PurseController.prototype.render = function(name,element,options) {
	
	if ( typeof window[name] === 'function' ) {
		new window[name](element, options);
	}
}