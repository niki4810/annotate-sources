define(["jquery","underscore"], function($,_) {
	

	var command = function() {
	};

	command.prototype.execute = function() {
		_.bindAll(this);
		console.log(this.eventData);
		var url = "http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=78ejsdd76tc6jsffmrxjddxu";
		url += "&q=" + this.eventData.data.get("title");
		url += "&page_limit=1";
		var that = this;
		$.getJSON({
			url : url,
			success : function(data) {
				that.handleDataLoadSuccess(data);
			},
			error : function(e) {
				that.handleDataLoadError(e);
			}
		})
	}; 
	
	command.prototype.handleDataLoadSuccess = function(data){
		console.log(data);
	};
	
	command.prototype.handleDataLoadError = function(e){
		console.log(e);
	};

	return command;
})
