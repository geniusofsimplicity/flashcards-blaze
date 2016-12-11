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
		return Template.instance().editMode.get() && ! Session.get('newCard');
	},
	editCardAllow: function() {
		return Session.get('editCardAllow') || Template.instance().editMode.get();
	}
});

Template.Card.events({
	'click .fa-exchange': function(e, template) {
		template.isBackSide.set(!template.isBackSide.get());
	},
	'click .fa-pencil': function(e, template) {
		Session.set('newCard', false);
		let editMode = template.editMode.get();
		template.editMode.set(!editMode);
		if(!editMode){
			Session.set('editCardAllow', false);
		}else{
			Session.set('editCardAllow', true);
		}

	},
	'click .fa-trash': function() { 
		console.log("deleting the card");
		console.log(this);
		Meteor.call('deleteCard', this._id);
	},
});