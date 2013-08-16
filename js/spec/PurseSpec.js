describe("Accepted Input types", function() {
	
	var purse;

	beforeEach(function() {
    	purse = new Purse();
  	});

	it("accepts single digit",function(){
 		var input = '4';
 		expect(purse.toPennies(input)).toEqual(4);
	});

	it("accepts double digit",function(){
 		var input = '85';
 		expect(purse.toPennies(input)).toEqual(85);
	});

	it("accepts pence symbol",function(){
 		var input = '197p';
 		expect(purse.toPennies(input)).toEqual(197);
	});
	
	it("accepts pence symbol single digit",function(){
 		var input = '2p';
 		expect(purse.toPennies(input)).toEqual(2);
	});

	it("accepts pounds decimal",function(){
 		var input = '1.87';
 		expect(purse.toPennies(input)).toEqual(187);
	});

	it("accepts pound symbol",function(){
 		var input = '£1.23';
 		expect(purse.toPennies(input)).toEqual(123);
	});

	it("accepts single digit pound symbol",function(){
 		var input = '£2';
 		expect(purse.toPennies(input)).toEqual(200);
	});

	it("accepts double digit pound symbol",function(){
 		var input = '£10';
 		expect(purse.toPennies(input)).toEqual(1000);
	});

	it("accepts pound and pence symbol",function(){
 		var input = '£1.87p';
 		expect(purse.toPennies(input)).toEqual(187);
	});

	it("accepts missing pence",function(){
 		var input = '£1p';
 		expect(purse.toPennies(input)).toEqual(100);
	});
	
	it("missing pence but present decimal point",function(){
 		var input = '£1.p';
 		expect(purse.toPennies(input)).toEqual(100);
	});
	
	it("accepts buffered zeros",function(){
 		var input = '001.41p';
 		expect(purse.toPennies(input)).toEqual(141);
	});

	it("accepts rounding three decimal places to two",function(){
 		var input = '4.235p';
 		expect(purse.toPennies(input)).toEqual(424);
	});

	it("accepts rounding with symbols",function(){
 		var input = '£1.257422457p';
 		expect(purse.toPennies(input)).toEqual(126);
	});
});

describe("Invalid Input types", function() {
	
	var purse;

	beforeEach(function() {
    	purse = new Purse();
  	});

	it("Should not accept empty string",function(){
 		var input = '';
 		expect(purse.toPennies(input)).toEqual(0);
	});

	it("non-numeric character",function(){
 		var input = '1x';
 		expect(purse.toPennies(input)).toEqual(0);
	});

	it("non-numeric character",function(){
 		var input = '£1x.0p';
 		expect(purse.toPennies(input)).toEqual(0);
	});


	it("Should not accept  missing digits",function(){
 		var input = '£p';
 		expect(purse.toPennies(input)).toEqual(0);
	});
});

describe("Sorting pennies into coins", function() {
	
	var purse;

	beforeEach(function() {
    	purse = new Purse();
  	});

	it("turns pennies into sterling",function(){
 		var input = '123';
		var output = {
				"£1": 1, 
				"20p": 1, 
				"2p": 1, 
				"1p": 1
			};
 		expect(purse.toSterling(input)).toEqual(output);
	});

});