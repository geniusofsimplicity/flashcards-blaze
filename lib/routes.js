FlowRouter.route('/', {
	name: 'home',
	action() {
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
	name: 'cards',
	action() {
		BlazeLayout.render('MainLayout', {main: 'CardsByCategory'});
	}
});

FlowRouter.route('/categories', {
	name: 'cards',
	action() {
		BlazeLayout.render('MainLayout', {main: 'Categories'});
	}
});