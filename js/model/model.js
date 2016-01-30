Model = Class.extend(function(){
	
	var header = new Array();	
	var data;
	var cluster;
	var headerKey = {};
	
	
	this.constructor = function(){ 
		console.log('MyVision model initialized!');   
		
    };
	
	this.setData = function (d) {
		header = d[0];
		data = d[1];
		cluster = d[2];

	  var index = 0;	
	  for( key in header) {
		 headerKey[header[key][0]] = index;
		 index++;
	  }	  
	}
	
	this.getHeader = function() {
		return header	
	};
	
	this.getData = function() {
		return data	
	};
	
	this.getCluster = function() {
		return cluster	
	};
	
	this.getClusterDepth = function(){
		return this.getCluster().clusterDeph
	}
	
	this.getHeaderByName = function(name) {
		return headerKey[name]		
	}
	
	this.getHeaderByKey = function(key) {
		return header[key][0];
	}
})