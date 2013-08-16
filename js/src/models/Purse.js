function Purse() {
	
	this.config = {
			pound_regexp: /^£/,
			pence_regexp: /p$/,
			invalid_regexp: /[^p£\.\d]/
		};

	this.coins = [
			{200: "£2"},
			{100: "£1"},
			{50:  "50p"},
			{20:  "20p"},
			{10:  "10p"},
			{5:   "5p"},
			{2:   "2p"},
			{1:   "1p"}   
		];

	this.purse = {};
				
}

Purse.prototype.toPennies = function(input) {

	var input = input;
	//catch errors
	if(input.match(this.config.invalid_regexp) || input == NaN || input == ''){
		return 0;
	}

	//remove pence
	input = input.replace(this.config.pence_regexp,"");
		
	//check if we are an interger
	if(this.isInt(input)){
		return parseInt(input);
	}
	
	//parse pounds
	input = this.parsePounds(input);
		
	return parseInt(input);
	
};

Purse.prototype.isInt = function(n) {
	var matches = (n).match(/^\d+$/);
	if ( matches == undefined || !( matches.length == 1 ) ) { return false; }
	return matches[0]  == n;
}

Purse.prototype.parsePounds = function(n) {

	//remove pound symbol	
	n = n.replace(this.config.pound_regexp,"");
	
	//check we have a decimal place
	if(n.match(/\./)){
		//round it up to 2 decimal places
		n = Math.round(n * 100);
		return parseInt(n);
	} 
	
	return n * 100;
	
}

Purse.prototype.toSterling = function(input) {
	
	coins = this.coins;
	//loop over all our coins
	for (var i = 0; i < coins.length; i++){
		var coin = coins[i];
		for(value in coin){
		    if (coin.hasOwnProperty(value)){
				//calculate the max number of times this coin can fit into our input value
				number_of_coins = Math.floor(input/value);
				//remove the correct number of pennies from our input
				input = input - (number_of_coins * value);
				//add it to our purse
				this.addToPurse(coin[value],number_of_coins);
		    }
		}	    
	}
	return this.purse;
}

Purse.prototype.addToPurse = function(coin,amount) {
	if(amount > 0){
		this.purse[coin] = amount;
	}
}

