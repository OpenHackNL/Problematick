'use strict';

module.exports = function(app) {
	// Routing logic   
	// ...
    var problem = require('../../app/controllers/problem.server.controller');

    app.route('/problem').post(problem.create);

    app.route('/problem').get(problem.list);

    app.route('/problem/:problemId')
        .get(problem.read);

    app.param('problemId', problem.problemByID);

};