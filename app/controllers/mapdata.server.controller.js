exports.render = function(req, res) {
    res.render('mapdata', {
    	title: 'MEAN MVC',
    	//user: req.user ? req.user.username : ''
    });
};