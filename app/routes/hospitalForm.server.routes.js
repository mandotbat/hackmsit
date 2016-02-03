var hospitalForm = require('../../app/controllers/hospitalForm.server.controller');

module.exports = function(app) {
  //  var index = require('../controllers/index.server.controller');
    app.get('/hospitalForm', hospitalForm.render);
   /* app.route('/')
		.get(users.renderRegister)
		.post(users.register);*/

};

