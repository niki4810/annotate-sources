define([
	'backbone', 
	'geppetto',
	'src/commands/SearchMoviesCommand'], 
function(
	Backbone,
	Geppetto, 
	SearchMoviesCommand) {

	return Geppetto.Context.extend({
		initialize : function() {
			// map commands here...
			this.mapCommand( "performSearchEvent"/*event name*/, SearchMoviesCommand );
		}
	});
})
