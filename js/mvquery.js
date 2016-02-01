MVQuery = Class.extend(function(){
	var id;
	var distinct = true;
	var topRow = 10;
	var orderBy;
	
	var query = {};
	
	this.constructor = function(param1,param2){		
	    id = param1.id;
		query = {select:param2.select}

		if(param2['where'] != undefined) {query['where']=param2.where}
		else {query['where']= new Col.fBoolean(true)}

		if(param2['groupBy'] != undefined) {query['groupBy']=param2.where}


	}
	
	this.getId = function () {
		return id;
	}
	
	this.getSelect = function () {
		return query.select
	}

	this.getWhere = function () {
		return query.where
	}
})