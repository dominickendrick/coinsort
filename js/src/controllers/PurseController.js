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
		var decimal 			= this.purse.toDecimal(input);
		var coinSet				= this.purse.toCoinSet(decimal);
	} 

	//if nothing is returned, render an error
	if(this.utils.isEmptyObject(coinSet)){
		this.render('ErrorView',this.element,[]);
	} else {
		this.render('PurseView',this.element,coinSet);
	}
	
}

PurseController.prototype.render = function(name,element,options) {
	//add output area if not yet added
	if($(element).length == 0){
		$('section.main').append('<div id="coin_output">');
	}
	
	if ( typeof window[name] === 'function' ) {
		new window[name](element, options);
	}
}