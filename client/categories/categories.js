import { Index, MinimongoEngine } from 'meteor/easy:search';
Meteor.subscribe('categories');

Template.Categories.helpers({
	categories: () => {		
		return Categories.find({}).fetch();
	},
	searchIndex: () => {
		const CategoriesIndex = new Index({
  		collection: Categories,
  		fields: ['name'],
  		engine: new MinimongoEngine(),
		});

		return CategoriesIndex;

/*		Tracker.autorun(function () {
  		let cursor = CategoriesIndex.search('Cities');

  		console.log(cursor.fetch()); 
  		console.log(cursor.count());
		});*/
	}
});

Template.Categories.events({
  'submit form': function(e) {
    e.preventDefault();    
    categoryName = e.target.categoryName.value;
    Meteor.call('addCategory', categoryName);
    e.target.name.value = '';
  },
});