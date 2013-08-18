describe("Purse controller view action", function() {
	
	var purse_controller;

	beforeEach(function() {
		//add mock purse model
		purse = {
			toDecimal: function(){return},
			toCoinSet: function(){return}			
		}
		spyOn(purse,'toDecimal');
		spyOn(purse,'toCoinSet');
    	purse_controller = new PurseController(purse);
  	});

	it("should call purse model",function(){
		var input = '£1.50';
		purse_controller.actionView(input);
		expect(purse.toDecimal).toHaveBeenCalled();
		expect(purse.toCoinSet).toHaveBeenCalled();
	});

});
