describe("Accepted Input types", function() {
	
	var coinSort;

	beforeEach(function() {
    	coinSort = new CoinSort();
  	});

	it("turns pennies into sterling",function(){
 		var input = '123';
		var output = {
				"£1": 1, 
				"20p": 1, 
				"2p": 1, 
				"1p": 1
			};
 		expect(coinSort.toSterling(input)).toEqual(output);
	});

});