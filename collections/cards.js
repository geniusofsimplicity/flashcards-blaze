Cards = new Mongo.Collection('cards');

Cards.allow({
	insert: function(userId, doc) {
		return !!userId;
	}
});

Category = new SimpleSchema({
	name: {
		type: String,
		label: "Name of category",
		autoform: {			
			label: false,
			placeholder: "Name of category",
		}
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