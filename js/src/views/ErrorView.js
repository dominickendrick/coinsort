function ErrorView(element, options) {
	
	output = "<p class='error'>The value you entered in not valid!</p>";
	output += "<p>Please enter the amount using one of the following formats: </p>";
	output += "<ul>";
	output += "<li>4</li>";
	output += "<li>85</li>";
	output += "<li>197p</li>";
	output += "<li>2p</li>";
	output += "<li>1.87</li>";
	output += "<li>£1.23</li>";
	output += "<li>£2</li>";
	output += "<li>£10</li>";
	output += "<li>£1.87p</li>";
	output += "<li>£1p</li>";
	output += "<li>£1.p</li>";
	output += "<li>001.41p</li>";
	output += "<li>4.235p</li>";
	output += "<li>£1.257422457p</li>";
	output += "</ul>";

	$(element).html(output);

}