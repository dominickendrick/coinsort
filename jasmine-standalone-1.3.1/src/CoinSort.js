function CoinSort() {
				
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



CoinSort.prototype.toSterling = function(input) {
	
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

CoinSort.prototype.addToPurse = function(coin,amount) {
	if(amount > 0){
		this.purse[coin] = amount;
	}
}