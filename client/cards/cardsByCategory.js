Template.CardsByCategory.onCreated(function() {
	Session.set('editCardAllow', true);
});

Template.CardsByCategory.helpers({
	cards: () => {
		return Cards.find({});
	},
	cardsByCategory: () => {
		categoryId = Session.get('categoryId');
		let cards = Cards.find({ "categories.categoryId": categoryId});
		return cards;
	},
});

Template.CardsByCategory.events({
	'keyup .category-selector-container input#searchCategories': (e) => {
		// let categoryName = e.target.categoryName.value;
		let categoryName = e.target.value;		
		let categoryId = Categories.findOne({ name: categoryName });
		if(!!categoryId){
			categoryId = categoryId._id;
			Session.set('categoryId', categoryId);
		}
		return false;
	}
});