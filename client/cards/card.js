Meteor.subscribe("categories");

Template.Card.onCreated(function() {
	this.isBackSide = new ReactiveVar(false);
});

Template.Card.helpers({
	isBackSide: function() {
		return Template.instance().isBackSide.get();
	},
	getCategoryNameById: (categoryId) => {
		let categoryName = Categories.findOne({ _id: categoryId }).name;		
		return categoryName; 
	}
});

Template.Card.events({
	'click .fa-exchange': function(e, template) {
		template.isBackSide.set(!template.isBackSide.get());
	}
});