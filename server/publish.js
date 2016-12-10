Meteor.publish('cards', function(){
	return Cards.find({ author: this.userId });
});

Meteor.publish('categories', function() {
	return Categories.find({ author: this.userId });
});