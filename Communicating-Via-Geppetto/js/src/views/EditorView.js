define(
	[
	"jquery",
	"underscore", 
	"backbone", 
	"marionette",
	"geppetto",
	"text!src/templates/EditorTemplate.html"
	],function(
		$,
		_,
		Backbone,
		Marionette,
		Geppetto,
		EditorTemplate
	){
	
	
	var EditorView = Marionette.ItemView.extend({
		template : EditorTemplate,
		className : "well span4",
		bindings : {
				"title" : '[name = "title"]',
				"year" : '[name = "year"]'
		},
		events : {
			"click button.searchBtn" : "searchClicked"
		},
		searchClicked : function(e) {
			console.log(this.model);
			this.context.dispatch("performSearchEvent",{data:this.model});
		},
		//local variable for model binder
		_modelBinder : undefined,
		initialize : function() {
			 _.bindAll(this);
			//on view initialize, initialize _modelBinder
			this._modelBinder = new Backbone.ModelBinder();
			//save the passed in context locally  such that
			// we can dispatch or listen to events on this context
			this.context = this.options.context;
		},
		close : function() {
			//when view closes, unbind Model bindings
			this._modelBinder.unbind();
		},
		onRender : function() {			  
			this._modelBinder.bind(this.model/*the model to bind*/, 
								   this.el/*root element*/, 
								   this.bindings /*bindings*/ );

		}
	});

	return EditorView;
})
