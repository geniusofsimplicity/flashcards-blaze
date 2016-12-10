Categories = new Mongo.Collection('categories');

Categories.allow({
	insert: function(userId, doc) {
		return !!userId;
	}
});

Meteor.methods({
  addCategory: function(categoryName){
    let currentUserId = Meteor.userId();
    if(currentUserId){
      Categories.insert({
        name: categoryName
      });
    }
  },
});


CategorySchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name of category",
		autoform: {			
			label: false,
			placeholder: "Name of category",			
		}
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

Categories.attachSchema( CategorySchema );