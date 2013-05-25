define([
	"jquery", 
	"underscore", 
	"backbone", 
	"marionette",
	"geppetto", 
	"text!src/templates/TableTemplate.html"
	],
 function(
 	$, 
 	_, 
 	Backbone, 
 	Marionette,
 	Geppetto, 
 	TableTemplate) {
	var TableView = Marionette.ItemView.extend({
		template: TableTemplate,
		className : "well span6",
		bindings : {
				"title" : '[name = "title"]',
				"year" : '[name = "year"]',
				"rated" : '[name = "rated"]',
				"rating" :'[name ="rating"]',
				"poster" :{selector: '[name=poster]',  elAttribute: 'src'}
		},
		initialize : function() {
			  _.bindAll(this);
				//on view initialize, initialize _modelBinder
			this._modelBinder = new Backbone.ModelBinder();
			//save the passed in context locally  such that
			// we can dispatch or listen to events on this context
			this.context = this.options.context;
			this.context.listen(this, "loadResultsEvent", this.handleLoadResults);
		},		
		close : function() {
			//when view closes, unbind Model bindings
			this._modelBinder.unbind();
		},
		onRender : function() {
			
			this._modelBinder.bind(this.model/*the model to bind*/, 
								   this.el/*root element*/, 
								   this.bindings /*bindings*/ );
								   
						   
		},
		handleLoadResults : function(data){
			console.log("view hit");
			this.model.set(data);
		}
	});

	return TableView;

})
