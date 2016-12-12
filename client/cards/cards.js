Template.CardsAll.onCreated(function() {
	Session.set('editCardAllow', true);
});

Meteor.subscribe('cards');

Template.CardsAll.helpers({
	cards: () => {
		return Cards.find({});
	}
});

Template.CardsAll.events({
	'click .new-card': () => {
		Session.set('newCard', true);
		// Session.set('editCardAllow', true);
	}
});