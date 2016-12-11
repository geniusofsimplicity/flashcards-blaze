Template.EditCard.events({
	'submit form': function(e) {
		e.preventDefault();
		let frontSide = e.target.frontSide.value;
		let backSide = e.target.backSide.value;
		let categoryName = e.target.categoryName.value;
		Meteor.call('addCategory', categoryName);
		let categoryId = Categories.findOne({ name: categoryName })._id;
		let editedCard = { _id: this._id, frontSide, backSide , categories: [{ categoryId: categoryId }] };		
		Meteor.call('updateCard', editedCard);
	}
});