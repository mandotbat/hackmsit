var mapdata = require('../../app/controllers/mapdata.server.controller');

module.exports = function(app) {
    //var index = require('../controllers/index.server.controller');
    app.get('/mapdata', mapdata.render);
   
};

