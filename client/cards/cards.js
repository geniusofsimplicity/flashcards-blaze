Meteor.subscribe('cards');

Template.CardsAll.helpers({
	cards: () => {
		return Cards.find({});
	}
});