FlowRouter.route('/', {
	name: 'home',
	action() {
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/cards', {
	name: 'cards',
	action() {
		BlazeLayout.render('MainLayout', {main: 'Cards'});
	}
});