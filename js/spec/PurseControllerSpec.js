describe("Purse controller view action", function() {
	
	var purse_controller;

	beforeEach(function() {
		//add mock purse model
		purse = {
			toPennies: function(){return},
			toSterling: function(){return}			
		}
		spyOn(purse,'toPennies');
		spyOn(purse,'toSterling');
    	purse_controller = new PurseController(purse);
  	});

	it("should call purse model",function(){
		var input = '£1.50';
		purse_controller.actionView(input);
		expect(purse.toPennies).toHaveBeenCalled();
		expect(purse.toSterling).toHaveBeenCalled();
	});

});
