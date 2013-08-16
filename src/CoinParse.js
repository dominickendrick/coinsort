function CoinParse() {
	
	this.config = {
			pound_regexp: /^£/,
			pence_regexp: /p$/,
			invalid_regexp: /[^p£\.\d]/
		};
				
}

CoinParse.prototype.toPennies = function(input) {
	
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

CoinParse.prototype.isInt = function(n) {
	var matches = (n).match(/^\d+$/);
	if ( matches == undefined || !( matches.length == 1 ) ) { return false; }
	return matches[0]  == n;
}

CoinParse.prototype.parsePounds = function(n) {

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

