// the /#/todos Controller. 
App.TodosController = Ember.ArrayController.extend({
	delete: function(el) {
		el.deleteRecord();
		this.get('store').commit();
		console.log("Item deleted...");
	}

	// the completed & notcompleted method returns 
	// all items filtered by the completed property
,	
	completed: function() {
		return this.filterProperty("completed",true);
	}.property("@each.completed")
,
	notcompleted: function() {
		return this.filterProperty("completed",false);
	}.property("@each.completed")

});

// the /#/todos/add Controller
App.TodosAddController = Ember.ObjectController.extend({
	save: function() {
		console.log("Item saved...");
		// commmit the changes to the store so we don't have any dirty items
		this.get("model.transaction").commit();
		// redirect to /#/todos
		this.get("target").transitionToRoute("todos");
	}
});