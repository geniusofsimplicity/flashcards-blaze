Meteor.subscribe("cards");
Meteor.subscribe("categories");

Template.NewCard.events({
	'submit form': function(e) {
		e.preventDefault();		
		let frontSide = e.target.frontSide.value;
		let backSide = e.target.backSide.value;
		let categoryName = e.target.categoryName.value;
		Meteor.call('addCategory', categoryName);
		let categoryId = Categories.findOne({ name: categoryName })._id;
		let newCard = { frontSide, backSide , categories: [{ categoryId: categoryId }] };		
		Meteor.call('addCard', newCard);
	},
	'click .fa-close': function(){
		Session.set('newCard', false);
	}
});