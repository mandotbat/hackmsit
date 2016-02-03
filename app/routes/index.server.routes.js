var users = require('../../app/controllers/users.server.controller');

module.exports = function(app) {
    var index = require('../controllers/index.server.controller');
    app.get('/', index.render);
    app.route('/')
		.get(users.renderRegister)
		.post(users.register);

};

