function Utils(){
	
}

Utils.prototype.isEmptyObject = function(obj) {
    var name;
    for (name in obj) {
        return false;
    }
    return true;
}