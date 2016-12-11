import { Index, MinimongoEngine } from 'meteor/easy:search';
Meteor.subscribe('categories');

Template.SearchCategory.helpers({  
  searchIndex: () => {
    const CategoriesIndex = new Index({
      collection: Categories,
      fields: ['name'],
      engine: new MinimongoEngine(),
    });
    return CategoriesIndex;
  },
  searchCategories: () => {
    Categories.find().fetch().map(function(it){ return it.name; });
  },
  getCategoryNameById: (id) => {
    console.log("in getCategoryNameById");
    let category = Categories.findOne({ _id: id });
    if(!!category){
      return category.name;
    }
  }
});

Template.SearchCategory.rendered = function () {
  AutoCompletion.init("input#searchCategories");
}

Template.SearchCategory.events({
  'keyup input#searchCategories': function () {
    AutoCompletion.autocomplete({
      element: 'input#searchCategories',       // DOM identifier for the element
      collection: Categories,              // MeteorJS collection object
      field: 'name',                    // Document field name to search for
      limit: 0,                         // Max number of elements to show
      sort: { categoryName: 1 }});              // Sort object to filter results with
      //filter: { 'gender': 'female' }}); // Additional filtering
  }
});