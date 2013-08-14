describe("Accepted Input types", function() {
	
	var coinsort;

	beforeEach(function() {
    	coinsort = new CoinSort();
  	});
	
	it("accepts a single digit", function() {
		var input = '4';
		expect(coinsort.parse(input)).toEqual(4);
  	});

	it("accepts single digit",function(){
 		var input = '4';
 		expect(coinsort.parse(input)).toEqual(4);
	});

	it("accepts double digit",function(){
 		var input = '85';
 		expect(coinsort.parse(input)).toEqual(85);
	});

	it("accepts pence symbol",function(){
 		var input = '197p';
 		expect(coinsort.parse(input)).toEqual(197);
	});
	
	it("accepts pence symbol single digit",function(){
 		var input = '2p';
 		expect(coinsort.parse(input)).toEqual(2);
	});

	it("accepts pounds decimal",function(){
 		var input = '1.87';
 		expect(coinsort.parse(input)).toEqual(187);
	});

	it("accepts pound symbol",function(){
 		var input = '£1.23';
 		expect(coinsort.parse(input)).toEqual(123);
	});

	it("accepts single digit pound symbol",function(){
 		var input = '£2';
 		expect(coinsort.parse(input)).toEqual(200);
	});

	it("accepts double digit pound symbol",function(){
 		var input = '£10';
 		expect(coinsort.parse(input)).toEqual(1000);
	});

	it("accepts pound and pence symbol",function(){
 		var input = '£1.87p';
 		expect(coinsort.parse(input)).toEqual(187);
	});

	it("accepts missing pence",function(){
 		var input = '£1p';
 		expect(coinsort.parse(input)).toEqual(100);
	});
	
	it("missing pence but present decimal point",function(){
 		var input = '£1.p';
 		expect(coinsort.parse(input)).toEqual(100);
	});
	
	it("accepts buffered zeros",function(){
 		var input = '001.41p';
 		expect(coinsort.parse(input)).toEqual(141);
	});

	it("accepts rounding three decimal places to two",function(){
 		var input = '4.235p';
 		expect(coinsort.parse(input)).toEqual(424);
	});

	it("accepts rounding with symbols",function(){
 		var input = '£1.257422457p';
 		expect(coinsort.parse(input)).toEqual(126);
	});
});

describe("Invalid Input types", function() {

	it("Should not accept empty string",function(){
 		var input = '';
 		expect(coinsort.parse(input)).toEqual(0);
	});

	it("non-numeric character",function(){
 		var input = '1x';
 		expect(coinsort.parse(input)).toEqual(0);
	});

	it("non-numeric character",function(){
 		var input = '£1x.0p';
 		expect(coinsort.parse(input)).toEqual(0);
	});


	it("Should not accept  missing digits",function(){
 		var input = '£p';
 		expect(coinsort.parse(input)).toEqual(0);
	});
});