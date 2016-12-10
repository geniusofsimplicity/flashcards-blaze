Meteor.subscribe('cards');

Template.CardsAll.helpers({
	cards: () => {
		return Cards.find({});
	}
});

Template.CardsAll.events({
	'click .new-card': () => {
		console.log("new card was clicked");
		Session.set('newCard', true);
	}
});