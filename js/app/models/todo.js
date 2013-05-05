// for this project we'll use the Todo model
// with 2 fields, one string for the ToDo title
// and one boolean for the completed status.
App.Todo = DS.Model.extend({
	title: DS.attr("string"),
	completed: DS.attr("boolean"),

	// if the completed checkbox is checked in the view
	// we'll automatically commit the changes to the store.
	changedCompleted: function() {
		this.get("transaction").commit();
		console.log("Transaction was commited...");
	}.observes("completed")
});