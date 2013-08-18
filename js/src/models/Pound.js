function Pound (type){
	
	this.currency_symbol = '£';
	this.decimal_symbol  = 'p';
	this.decimal_seperator = '.';
	
	this.currency_regexp = /^\u00A3|£/g;
	this.decimal_regexp  = /p$/g;
	this.invalid_regexp  = /[^p\u00A3\.\d£]/;
	
	this.coins = [200,100,50,20,10,5,2,1];
	this.decimal_seperator_digits = 2;
	
	
}

