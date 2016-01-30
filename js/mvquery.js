MVQuery = Class.extend(function(){
	var id;
	var distinct = true;
	var topRow = 10;
	var orderBy;
	
	var query = new Array();
	
	this.constructor = function(param1,param2){		
	    id = param1.id;
		distinct = param1.distinct;		
		query = param2;
	}
	
	this.getId = function () {
		return id;
	}
	
	this.getQuery = function () {
		return query
	}
})