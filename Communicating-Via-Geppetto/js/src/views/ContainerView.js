define([
	"jquery",
	"underscore", 
	"backbone", 
	"marionette",
	"geppetto", 
	"src/controller/ApplicationContext", 
	"text!src/templates/ContainerTemplate.html", 
	"src/views/EditorView", 
	"src/views/TableView"],
	function(
		$, 
		_, 
		Backbone, 
		Marionette,
		Geppetto, 
		ApplicationContext, 
		ContainerTemplate,
		EditorView, 
		TableView) {

	var ContainerView = Marionette.ItemView.extend({
		template : ContainerTemplate,
		className : "container",
		initialize : function() {
			 _.bindAll(this);
			Geppetto.bindContext({
				view : this,
				context : ApplicationContext
			});
		},
		onRender : function() {
			this.constructEditorView();
			this.constructTableView();
		},
		constructEditorView : function() {
			//instantiate an editor view
			var myEditorView = new EditorView({
				context : this.context,
				model : new Backbone.Model()
			});
			myEditorView.render();
		this.$el.append(myEditorView.$el);

		},
		constructTableView : function() {
			var myTableView = new TableView({
				context : this.context,
				model : new Backbone.Model()
			});
            myTableView.render()
			
			this.$el.append(myTableView.$el);
			

		}
	});
	return ContainerView;
});
