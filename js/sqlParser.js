sqlParser = Class.extend(function(){
	this.constructor = function(){
	}
	
	
	
	this.getMVQ = function(sql,model){
		
		console.log( model.getHeaderByName('ID') )
		
		// function select data
		// Col.fSelect(arg)
		// arg = column index
		// returns column from model
		
		
		// Col.fUpCase(arg)
		// arg = string
		// returns upcase of string
		

		var sqlQuery = sql.split(" ");

		if (sqlQuery[0] == "create" && sqlQuery[1] == "MVQuery") {
			var tableName = sqlQuery[2];
		}
		else {
			console.log("wrong query input");
		}

		if ((sqlQuery[3] == "as" && sqlQuery[4] == "select") && (sqlQuery[5] == "ID" || sqlQuery[5] == "Year" || sqlQuery[5] == "Group_Dim")) {
			switch (true) {
				case sqlQuery[5] == "ID":
					var col = new Col.fSelect(0);
					break;
				case sqlQuery[5] == "Year":
					var col = new Col.fSelect(1);
					break;
				case sqlQuery[5] == "Group_Dim":
					var col = new Col.fSelect(2);
					break;
				default:
					console.log("Something goes wrong");
			}
		}
		else {
			console.log("wrong query input")
		}




		

		
		var query = new MVQuery( {id:tableName} , [col]);
		console.log(sql);

				
		return query;
	}
	
})