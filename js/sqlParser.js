sqlParser = Class.extend(function(){
	this.constructor = function(){
	};

	this.getMVQ = function(sql,model){

		console.log( model.getHeaderByName('Year') );
		var col = [];

		var sqlQuery = sql.split(" ");

		if (sqlQuery[0] == "create" && sqlQuery[1] == "MVQuery") {
			var tableName = sqlQuery[2];
		}
		else {
			console.log("wrong query input");
		}

		if (sqlQuery[3] == "as" && sqlQuery[4] == "select" ){
			var tmp = [];
			tmp = sqlQuery.slice(5);
			var str = new String();
			for(var i=0; i<tmp.length; i++){ str += tmp[i];}
			tmp = str.split(",");
			var rowNames = tmp; }

			for(var i=0; i<rowNames.length; i++){
				console.log(i+1 + " row: " + rowNames[i]);
				if(rowNames[i] == data[0][0][0] || rowNames[i] == data[0][1][0] || rowNames[i] == data[0][2][0]){
					switch (true) {
						case rowNames[i] == data[0][0][0]:
							col.push(new Col.fSelect(0));
							break;
						case rowNames[i] == data[0][1][0]:
							col.push(new Col.fSelect(1));
							break;
						case rowNames[i] == data[0][2][0]:
							col.push( new Col.fSelect(2));
							break;
						default:
							console.log("Something goes wrong");
					}
				}
				else {
					console.log("wrong query input")
				}
			}

			query = new MVQuery( {id:tableName} , {select: col } );

			console.log("Query: " + sql);
			console.log("size of col array: " + col.length);

			return query;
		}
	});
