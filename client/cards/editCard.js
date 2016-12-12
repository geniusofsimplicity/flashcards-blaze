Template.EditCard.events({
	'submit .edit-card-container #new-card-form': function(e, template) {
		e.preventDefault();
		console.log("in EditCard submit event");
		let frontSide = e.target.frontSide.value;
		let backSide = e.target.backSide.value;
		let categoryName = e.target.categoryName.value;
		Meteor.call('addCategory', categoryName);
		let categoryId = Categories.findOne({ name: categoryName })._id;
		let editedCard = { _id: this._id, frontSide, backSide , categories: [{ categoryId: categoryId }] };		
		Meteor.call('updateCard', editedCard);
		Session.set('editCardAllow', true);
		// // let parentTemplate =  Template.parentData(1);
		// let editModeVar = Session.get('editModeVar');
		// console.log("editModeVar");
		// console.log(editModeVar);
		// editModeVar.set(false);
	},
	'click .fa-trash': function() { 
		console.log("deleting the card");
		console.log(this);
		Meteor.call('deleteCard', this._id);
	},
});