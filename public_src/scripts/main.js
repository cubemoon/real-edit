define([
	'lodash',
	'jquery',
	'backbone',
	'handlebars',
	'app',
	'routers',
	'socket.io',
	'bootstrap-dropdown',
	'bootstrap-modal',
	'bootstrap-transition'
], function (_, $, Backbone, Handlebars, app, routers, io) {
	app.views = [];

	_.each(routers, function (Router) {
		if (Router && _.isFunction (Router)) {
			new Router();
		}
	});

	Backbone.history.start({
		pushState: true,
		hashChange: false
	});
});
