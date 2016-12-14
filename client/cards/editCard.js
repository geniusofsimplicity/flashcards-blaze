Template.EditCard.events({
	'submit .edit-card-container #new-card-form': function(e, template) {
		e.preventDefault();
		let frontSide = e.target.frontSide.value;
		let backSide = e.target.backSide.value;
		let categoryName = e.target.categoryName.value;
		categoryName = categoryName.toLowerCase();
		Meteor.call('addCategory', categoryName);
		let categoryId = Categories.findOne({ name: categoryName })._id;
		let editedCard = { _id: this._id, frontSide, backSide , categories: [{ categoryId: categoryId }] };		
		Meteor.call('updateCard', editedCard);
		Session.set('editCardAllow', true);
	},
	'click .fa-trash': function() {
		Meteor.call('deleteCard', this._id);
	},
});