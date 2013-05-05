// we declare the routes for the application
App.Router.map(function() {
	this.resource('todos', function() {
		this.route("add");
	});
	this.resource('about');
	this.resource('credits');
});