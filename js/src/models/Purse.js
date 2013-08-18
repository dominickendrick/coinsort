function Purse() {
	
	this.currency = new Pound();

	this.purse = {};
				
}

Purse.prototype.toDecimal = function(input) {

	var input = input;

	//check for input errors
	if(this._checkDecimalInputError(input,this.currency.invalid_regexp)){
		return 0;
	};

	//remove pence
	input = input.replace(this.currency.decimal_regexp,"");
	
	//check if we are an interger
	if(this._isInt(input)){
		return parseInt(input);
	}

	//parse pounds
	input = this._stripCurrency(input);
		
	return parseInt(input);
	
};


Purse.prototype.toCoinSet = function(input) {
	
	coins = this.currency.coins;
	//loop over all our coins
	for (var i = 0; i < coins.length; i++){
		var value = coins[i];
		//calculate the max number of times this coin can fit into our input value
		number_of_coins = Math.floor(input/value);
		//remove the correct number of pennies from our input
		input = input - (number_of_coins * value);
		//add it to our purse
		this._addToPurse(this.currency.coinValue(value),number_of_coins);
	}
	return this.purse;
}

Purse.prototype._addToPurse = function(coin,amount) {
	if(amount > 0){
		this.purse[coin] = amount;
	}
}

Purse.prototype._stripCurrency = function(n) {

	//remove currency symbol	
	n = n.replace(this.currency.currency_regexp,"");
	//check we have a decimal seperator
	if(n.indexOf(this.currency.decimal_seperator) >= 0){
		//round it up to 2 decimal places
		n = Math.round(n * 100);
		return parseInt(n);
	} 
	
	return n * 100;
	
}

Purse.prototype._isInt = function(n) {
	var matches = (n).match(/^\d+$/);
	if ( matches == undefined || !( matches.length == 1 ) ) { return false; }
	return matches[0]  == n;
}

Purse.prototype._checkDecimalInputError = function(input,matcher) {
	if(input == NaN || input == '' || input.match(matcher)){
		return true;
	}
	return false;
}
