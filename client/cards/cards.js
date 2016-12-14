Template.CardsAll.onCreated(function() {
	Session.set('editCardAllow', true);
	let amount = parseInt(Session.get('recentlyCreatedAmount'));
	if(amount == 0) {
		Session.set('recentlyCreatedAmount', 5);
	}
	
});

Meteor.subscribe('cards');

Template.CardsAll.helpers({
	cards: () => {
		let amount = parseInt(Session.get('recentlyCreatedAmount'));
		return Cards.find({}, { limit: amount , sort: { 'createdAt': -1 } });
	},
	recentlyCreatedAmount: () => {
		return parseInt(Session.get('recentlyCreatedAmount'));
	}
});

Template.CardsAll.events({
	'click .new-card': () => {
		Session.set('newCard', true);
	},
	'change input#recently-created-amount': (e) => {
		let amount = e.target.value;
		Session.set('recentlyCreatedAmount', amount);
	}
});