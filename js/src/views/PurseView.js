function PurseView(element, coins) {

	var template = '<table id="coin_output"><thead><tr><th>Coin type</th><th>Quantity needed</th></tr></thead><tbody></tbody></table>';

	var output = '';
	
	for(coin in coins){
		output += "<tr>";
		output += "<td>" + coin + "</td>" + "<td>" + coins[coin] +"</td>";		
		output += "</tr>";
	}

	if($('table#coin_output').length == 0){
		$('section.main').append(template);
	}
    $(element).html(output);
}