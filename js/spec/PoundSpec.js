describe("Pound coin types", function() {
	
	var pound;

	beforeEach(function() {
    	pound = new Pound();
  	});

	it("anything below 100p is expressed as pence",function(){
 		var input = '80';
 		expect(pound.coinValue(input)).toEqual('80p');
	});

	it("anything above 100p is expressed as pounds",function(){
 		var input = '200';
 		expect(pound.coinValue(input)).toEqual('£2');
	});
});