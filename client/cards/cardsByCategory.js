Meteor.subscribe('cards');

Template.CardsByCategory.helpers({
	cards: () => {
		return Cards.find({});
	},
	cardsAmount: () => {
		return "hello";
	},
});