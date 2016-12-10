Meteor.subscribe("cards");
Meteor.subscribe("categories");

Template.NewCard.events({
	'submit #new-card-form': function(e) {
		e.preventDefault();		
		frontSide = e.target.frontSide.value;
		backSide = e.target.backSide.value;
		categoryName = e.target.categoryName.value;
		Meteor.call('addCategory', categoryName);
		let categoryId = Categories.findOne({ name: categoryName })._id;
		let newCard = { frontSide, backSide , categories: [{ categoryId: categoryId }] };		
		Meteor.call('addCard', newCard);
	},
	'click .fa-close': function(){
		Session.set('newCard', false);
	}
});