function PurseView(element, coins) {

	var output = '';
	
	for(coin in coins){
		output += "<tr>";
		output += "<td>" + coin + "</td>" + "<td>" + coins[coin] +"</td>";		
		output += "</tr>";
	}

    $(element).html(output);
}