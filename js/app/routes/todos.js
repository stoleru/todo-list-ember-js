// the /#/todos Route. 
App.TodosRoute = Ember.Route.extend({
	// for the model we return all items found in the store model
	model: function() {
		return App.Todo.find();
	}
});

// the /#/todos/add
App.TodosAddRoute = Ember.Route.extend({
	// create a new record model when we get to /#/todos/add
	model: function() {
		return App.Todo.createRecord({completed: false});
	}
});

// the /#/ route is empty so we redirect the user to the /#/todos route
App.IndexRoute = Ember.Route.extend({
	// just a simple redirect
	setupController: function(controller, model) {
    	controller.transitionToRoute('todos');
  	}
});