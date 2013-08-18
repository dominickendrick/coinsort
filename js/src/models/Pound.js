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

Pound.prototype.coinValue = function(value){
	//takes a number value and returns the coin denomination depending
	// of the digits after decimal seperator ie with deciaml seperator digits as 2
	// 200 = £2 and 50 = 50p
	decimal_value = Math.pow(10,this.decimal_seperator_digits);
	if(value < decimal_value){
		return value + this.decimal_symbol;
	} else {
		return this.currency_symbol + (value/decimal_value);
	}
}

