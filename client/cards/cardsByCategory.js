Meteor.subscribe('cards');

Template.CardsByCategory.helpers({
	cards: () => {
		return Cards.find({});
	},
	cardsByCategory: () => {
		categoryId = Session.get('categoryId');
		console.log("in cardsByCategory helper");
		console.log(categoryId);
		let cards = Cards.find({ "categories.categoryId": categoryId});
		console.log("cards found: ");
		console.log(cards.fetch());
		return cards;
	},
});

Template.CardsByCategory.events({
	'keyup input#searchCategories': (e) => {
		// let categoryName = e.target.categoryName.value;
		let categoryName = e.target.value;		
		let categoryId = Categories.findOne({ name: categoryName });
		if(!!categoryId){
			categoryId = categoryId._id;
			Session.set('categoryId', categoryId);
			console.log("categoryId = ");
			console.log(categoryId);
		}
		
		
		return false;
	}
});