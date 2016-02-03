var hospitalDB = require('../../app/controllers/hospitalDB.server.controller');

module.exports = function(app) {
	app.route('/hospitaldb').post(hospitalDB.create).get(hospitalDB.list);

	app.route('/hospitaldb/:dbById').get(hospitalDB.read).put(hospitalDB.update).delete(hospitalDB.delete);

	app.param('dbById', hospitalDB.dbById);

};

