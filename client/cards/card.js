Meteor.subscribe("categories");

Template.Card.onCreated(function() {
	this.isBackSide = new ReactiveVar(false);
	this.editMode = new ReactiveVar(false);
});

Template.Card.helpers({
	isBackSide: function() {
		return Template.instance().isBackSide.get();
	},
	getCategoryNameById: (categoryId) => {
		let categoryName = Categories.findOne({ _id: categoryId }).name;		
		return categoryName; 
	},
	editMode: function() {
		return Template.instance().editMode.get();
	}
});

Template.Card.events({
	'click .fa-exchange': function(e, template) {
		template.isBackSide.set(!template.isBackSide.get());
	},
	'click .fa-pencil': function(e, template) {
		template.editMode.set(!template.editMode.get());
	},
	'click .fa-trash': function() { 
		console.log("deleting the card");
		console.log(this);
		Meteor.call('deleteCard', this._id);
	},
});