function PurseView(element, coins) {

	var template = '<table id="results_table"><thead><tr><th>Coin type</th><th>Quantity needed</th></tr></thead><tbody></tbody></table>';

	var output = '';
	
	for(coin in coins){
		output += "<tr>";
		output += "<td>" + coin + "</td>" + "<td>" + coins[coin] +"</td>";		
		output += "</tr>";
	}

	if($(element).length == 0){
		$('section.main').append('<div id="coin_output">');
	}
	//add in table first
	$(element).html(template);
	//now add results
    $('#results_table tbody').html(output);
}