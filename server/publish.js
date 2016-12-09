Meteor.publish('cards', function(){
	return Cards.find({ author: this.userId });
});