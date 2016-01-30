var Col = Col|| {};

Col.fClass = Class.extend(function(){
	var param;
	var colLabel = 'undefined';	
	var col;
	var func = {};

	
	
	this.constructor = function(p1,p2){

		//if( typeof p1 == 'number' ) {col = p1} 
		col = p1;
		//colLabel = p2.label;
		//if( typeof p1 == 'object' ) {func = p1}
		
    };
	
	
	
	this.preExecutor = function(){console.warrning('not overriden!')}

	
	this.postExecutor = function(){console.warrning('not overriden!')}
	
	this.getLabel = function(){return colLabel}
	this.setLabel = function(label){colLabel = label}
	this.getCol = function(label){return col}
	
			
})



Col.fSelect = Col.fClass.extend(function(){

	this.preExecutor = function(m){		
		return m[this.getCol()]	
	}
	
	this.postExecutor = function(input){	
		return input	
	}
	
	
})

Col.fUpCase = Col.fClass.extend(function(){

	
	this.preExecutor = function(m){		
		return this.getCol().preExecutor(m);
	}
	
	this.postExecutor = function(input){	
		return input.toUpperCase()	
	}
	
	
})

Col.incByOne = Col.fClass.extend(function(){

	
	this.preExecutor = function(m){	
		return this.getCol().preExecutor(m);
	}
	
	this.postExecutor = function(input){	
		return this.getCol().postExecutor(Number(input))+1	
	}
	
	
})



Col.fSum = Col.fClass.extend(function(){
var total = 0;
	this.preExecutor = function(m){	
		total = Number(this.getCol().preExecutor(m)) + total
		return null;
	}
	
	this.postExecutor = function(input){					
		return this.getCol().postExecutor(Number(total));		
	}
	
	this.getName = function() {return param1}	
})