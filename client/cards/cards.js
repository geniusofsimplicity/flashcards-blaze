Meteor.subscribe('cards');

Template.Cards.helpers({
	cards: () => {
		return Cards.find({});
	}
});