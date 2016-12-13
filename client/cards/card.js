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
		let currentUserId = Meteor.userId(); 		
		let categoryName = Categories.findOne({ _id: categoryId, author: currentUserId }).name;		
		return categoryName; 
	},
	editMode: function() {
		return Template.instance().editMode.get() && ! Session.get('newCard');
	},
	editCardAllow: function() {
		return Session.get('editCardAllow') || Template.instance().editMode.get();
	},
	editModeStyle: function() {
		if(Template.instance().editMode.get() && ! Session.get('newCard')){
			return "no-overflow";
		}
		return "";
	},
});

Template.Card.events({
	'click .fa-exchange': function(e, template) {
		template.isBackSide.set(!template.isBackSide.get());
	},
	'click .fa-pencil': function(e, template) {		
		let newCard = Session.get('newCard');
		Session.set('newCard', false);
		let editMode = template.editMode.get();		
		//if editCard was opened before new card was open,
		// it edit should open edit card again
		if(!(newCard && editMode)){ 
			template.editMode.set(!editMode);
		}
		if(editMode && !newCard){
			Session.set('editCardAllow', true);
		}else{
			Session.set('editCardAllow', false);
		}		
	},
	'click .fa-trash': function() {
		Meteor.call('deleteCard', this._id);
	},
	'submit .edit-card-container #new-card-form': function(e, template) {
		template.editMode.set(false);
	},
});