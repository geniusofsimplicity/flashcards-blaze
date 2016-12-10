Meteor.subscribe("cards");
Meteor.subscribe("categories");

Template.NewCard.events({
	'submit #new-card-form': function(e) {
		e.preventDefault();
		console.log("testing from form");
	}
});