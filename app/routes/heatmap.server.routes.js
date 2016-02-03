
module.exports = function(app) {
    var heatMap = require('../controllers/heatmap.server.controller');
    app.get('/heatmap', heatMap.render);
};

