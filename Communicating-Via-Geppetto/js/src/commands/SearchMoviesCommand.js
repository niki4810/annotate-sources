define(["jquery","underscore"], function($,_) {
	

	var command = function() {
	};

	command.prototype.execute = function() {
		_.bindAll(this);
		var that = this;

		var apikey = "78ejsdd76tc6jsffmrxjddxu";
		var baseUrl = "http://api.rottentomatoes.com/api/public/v1.0";
		var moviesSearchUrl = baseUrl + '/movies.json?apikey=' + apikey;
		var query = "Gone with the Wind";
		var pageLimit = "&page_limit=1";

		$.ajax({
			url : moviesSearchUrl + '&q=' + encodeURI(query) + pageLimit,
			dataType : "jsonp",
			success : function(data) {
				that.handleDataLoadSuccess(data);
			},
			error : function(e) {
				that.handleDataLoadError(e);
			}
		});

	};

	
	command.prototype.handleDataLoadSuccess = function(data){
		console.log(data);
	};
	
	command.prototype.handleDataLoadError = function(e){
		console.log(e);
	};

	return command;
})
