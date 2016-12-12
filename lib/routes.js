Accounts.onLogin(function() {
	FlowRouter.go('cards');
});

Accounts.onLogout(function() {
	FlowRouter.go('home');
});

FlowRouter.triggers.enter([function(context, redirect) {
	if(!Meteor.userId()){
		FlowRouter.go('home');
	}
}]);

FlowRouter.route('/', {
	name: 'home',
	action() {
		if(Meteor.userId()){
			FlowRouter.go('cards');
		}
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/cards', {
	name: 'cards',
	action() {
		BlazeLayout.render('MainLayout', {main: 'CardsAll'});
	}
});

FlowRouter.route('/test', {
	name: 'test',
	action() {
		BlazeLayout.render('MainLayout', {main: 'CardsByCategory'});
	}
});