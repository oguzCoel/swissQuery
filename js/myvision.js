//Main Object
var MyVision = Class.extend(function(){
	
    var model;
	var view;
	
	var version = "0.0.1";  	
	var mvquerySet ={};
	
	var engine;
	var sqlPar;
	
	//Constructor
    this.constructor = function(){
        console.log('MyVision Framework version : ' + version + ' has been initialized!');
		model = new Model();
		engine = new Engine();
		sqlPar = new sqlParser();		
    };

	this.addMVQuery = function(mvq) {
		mvquerySet[mvq.getId()] = mvq
	};
	
	this.runEngine = function (){
		engine.run(model , mvquerySet)
	}	    
	
	//Public Methods
	
	this.getModel = function (d){
		return model
	}
	
	this.newMVQuery = function(sql) {
		var mvq = sqlPar.getMVQ(sql , model);
		this.addMVQuery(mvq);
	};
	
});
  
  
  