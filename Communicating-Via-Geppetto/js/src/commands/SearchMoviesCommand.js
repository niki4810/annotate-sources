define(["jquery","underscore"], function($,_) {
	

	var command = function() {
	};

	command.prototype.execute = function() {
		_.bindAll(this);
		var that = this;

		var apikey = "78ejsdd76tc6jsffmrxjddxu";
		var baseUrl = "http://api.rottentomatoes.com/api/public/v1.0";
		var moviesSearchUrl = baseUrl + '/movies.json?apikey=' + apikey;
		var query = this.eventData.data.get("title");
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
		var movies = data.movies;
		var resultObj = {};
		resultObj.rated = movies[0].mpaa_rating;
		resultObj.title = movies[0].title;
		resultObj.rating = movies[0].ratings.audience_score;
		resultObj.year = movies[0].year;
		resultObj.poster = movies[0].posters.original;
		this.context.dispatch("loadResultsEvent",resultObj);
	};
	
	command.prototype.handleDataLoadError = function(e){
		console.log(e);
	};

	return command;
})
