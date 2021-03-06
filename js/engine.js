Engine = Class.extend(function(){
	var mvData = {};
	var execCycle;
	
	
	this.constructor = function(){
		console.log("MyVision Engine Initialized")	
	}
	
	this.run = function (model, mvquerySet) {
		//console.log(model.getHeaderByKey(0));
		execCycle = 0;
		for(var i = 0;i < 2 ;i++) {
			clusterIterator(model, mvquerySet);		
			execCycle++;			
		}
		console.log(mvData);
		return mvData; 
	};
	
	
	function clusterIterator(model,  mvquerySet ) {
		rowIterator	(model,  mvquerySet )
	};
	
	
	function rowIterator(model, mvquerySet ) {	 
	    
		for(var i = 0; i <  model.getData().length; i++){
			mvqIterator(model.getData()[i],  mvquerySet , i)			
		}
	};
	
	function mvqIterator(model,  mvquerySet ,row) {		
		for( key in mvquerySet){
			if(mvData[key] === undefined ) {mvData[key] = new Array(); }
			
			functionExec(model, mvquerySet[key] , key,row)
		}
	};
	
	
	function functionExec(model, mvquerySet , mvqKey,row){
	
		for( key in mvquerySet.getQuery() ) {
			var peFunc = mvquerySet.getQuery()[key];
			
			if(mvData[mvqKey][row]=== undefined ) {mvData[mvqKey][row] = new Array(); }
			if(execCycle == 0)
			{			
				
				mvData[mvqKey][row].push(  peFunc.preExecutor(model)  )
			}
			else
			{
				mvData[mvqKey][row][key]=  peFunc.postExecutor(mvData[mvqKey][row][key])  
			}
		}							
	}
	
	
});