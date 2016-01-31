var Col = Col|| {};
var Con = Con|| {};

Col.fClass = Class.extend(function(){
	var param=new Array();
	var colLabel = 'undefined';	


	
	this.constructor = function(){
		for (var i = 0; i < arguments.length; i++) {
			param[i]=arguments[i];	
		  }		
    };
	
	
	
	this.preExecutor = function(){console.warrning('not overriden!')};

	
	this.postExecutor = function(){console.warrning('not overriden!')};
	
	this.getLabel = function(){return colLabel};
	this.setLabel = function(label){colLabel = label};
	this.getCol = function(index){return param[index]}
	
			
});



Col.fSelect = Col.fClass.extend(function(){

	this.preExecutor = function(m){
		return 	m[this.getCol(0)]
	};
	
	this.postExecutor = function(m){	
	    if(typeof m == 'object') { return this.preExecutor(m)}
		
		return m	
	}
	
	
});

// String functions
Col.fString = Col.fClass.extend(function(){	
	this.preExecutor = function(m){		
		return this.getCol(0);
	};
	
	this.postExecutor = function(input){	
		return this.getCol(0);	
	}		
});


Col.fUpCase = Col.fClass.extend(function(){	
	this.preExecutor = function(m){		
		return this.getCol(0).preExecutor(m).toUpperCase()
	};
	
	this.postExecutor = function(m){	
		return this.getCol(0).postExecutor(m).toUpperCase()	
	}		
});



Col.fIndexOf = Col.fClass.extend(function(){	
	this.preExecutor = function(m){	
		return this.getCol(0).preExecutor(m).indexOf( this.getCol(1).preExecutor(m) );		
	};
	
	this.postExecutor = function(m){	
		return this.getCol(0).postExecutor(m).indexOf( this.getCol(1).postExecutor(m) );
			
	}		
});





Col.fSum = Col.fClass.extend(function(){
var total = 0;
	this.preExecutor = function(m){	
		total = Number(this.getCol(0).preExecutor(m)) + total
		return null;
	}
	
	this.postExecutor = function(m){					
		return this.getCol(0).postExecutor(Number(total));		
	}
	
})


//Arithmetic

Col.fNumber = Col.fClass.extend(function(){	
	
	this.preExecutor = function(m){		
		return Number(this.getCol(0));
	}
	
	this.postExecutor = function(m){
		if(	typeof m=='number') {return m}
		return Number(this.getCol(0));	
	}			
})

Col.fAddition = Col.fClass.extend(function(){	
	this.preExecutor = function(m){		
		this.getCol(0).preExecutor(m);
		this.getCol(1).preExecutor(m);
		return this.postExecutor(m);
	}
	
	this.postExecutor = function(m){	

		return Number( this.getCol(0).postExecutor(m) ) + Number( this.getCol(1).postExecutor(m) );	
	}		
})

Col.fSubtraction = Col.fClass.extend(function(){	
	this.preExecutor = function(m){		
		this.getCol(0).preExecutor(m);
		this.getCol(1).preExecutor(m);
		return this.postExecutor(m);
	}
	
	this.postExecutor = function(m){	
		return Number( this.getCol(0).postExecutor(m) ) - Number( this.getCol(1).postExecutor(m) );	
	}		
})

Col.fMultiplication = Col.fClass.extend(function(){	
	this.preExecutor = function(m){		
		this.getCol(0).preExecutor(m);
		this.getCol(1).preExecutor(m);
		return this.postExecutor(m);
	}
	
	this.postExecutor = function(m){	
		return Number( this.getCol(0).postExecutor(m) ) * Number( this.getCol(1).postExecutor(m) );	
	}		
})

Col.fDivision = Col.fClass.extend(function(){	
	this.preExecutor = function(m){		
		this.getCol(0).preExecutor(m);
		this.getCol(1).preExecutor(m);
		return this.postExecutor(m);
	}
	
	this.postExecutor = function(m){	
		return Number( this.getCol(0).postExecutor(m) ) / Number( this.getCol(1).postExecutor(m) );	
	}		
})

Col.fModulus = Col.fClass.extend(function(){	
	this.preExecutor = function(m){		
		this.getCol(0).preExecutor(m);
		this.getCol(1).preExecutor(m);
		return this.postExecutor(m);
	}
	
	this.postExecutor = function(m){	
		return Number( this.getCol(0).postExecutor(m) ) % Number( this.getCol(1).postExecutor(m) );	
	}		
})

Col.fToExponential = Col.fClass.extend(function(){	
	this.preExecutor = function(m){		
		this.getCol(0).preExecutor(m);
		this.getCol(1).preExecutor(m);
		return this.postExecutor(m);
	}
	
	this.postExecutor = function(m){	
		return Number( this.getCol(0).postExecutor(m) ).toExponential( Number( this.getCol(1).postExecutor(m) ) );	
	}		
})



////////////////////////////////////////////////////////////


Col.fEquals = Col.fClass.extend(function(){
	this.preExecutor = function(m){
		return this.getCol(0).preExecutor(m) == this.getCol(1).preExecutor(m);
	};

	this.postExecutor = function(m){
		return this.getCol(0).postExecutor(m) == this.getCol(1).postExecutor(m);
	};
});

