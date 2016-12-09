Meteor.subscribe('categories');

Template.Categories.helpers({
	categories: () => {
		let cards = Cards.find({}).fetch();
		let distinctCards = _.uniq(cards, false, function(card) {return card.category});		
		let ret = _.pluck(distinctCards, "categories");
		console.log(ret);
		return ret;
	}
});