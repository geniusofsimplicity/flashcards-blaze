Cards = new Mongo.Collection('cards');

Cards.allow({
	insert: function(userId, doc) {
		return !!userId;
	},
	update: function(userId, doc) {
		return !!userId;
	}
});

Meteor.methods({
  addCard: function(card){
    let currentUserId = Meteor.userId();
    if(currentUserId){
      Cards.insert(card);
    }
  },
  updateCard: function(card){
    let currentUserId = Meteor.userId();
    console.log("updating card");
    console.log(card);
    if(currentUserId){
      Cards.update( card._id, { $set: card });
    }
  },
  deleteCard: function(id) {
  	Cards.remove(id);
  }
});

Category = new SimpleSchema({
	categoryId: {
		type: String,				
	}
});

CardSchema = new SimpleSchema({
	frontSide: {
		type: String,
		label: "Front side of the card",
		autoform: {
			rows: 3,
			label: false,
			placeholder: "Front side of the card",
		}
	},
	backSide: {
		type: String,
		label: "Back side of the card",
		autoform: {
			rows: 3,
			label: false,
			placeholder: "Back side of the card",
		}
	},
	categories: {
		type: [Category]
	},
	author: {
		type: String,
		label: "Author",
		autoValue: function() {
			return this.userId
		},
		autoform: {
			type: "hidden"
		}
	},
	createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function() {
			return new Date()
		},
		autoform: {
			type: "hidden"
		}
	}
});

Cards.attachSchema( CardSchema );