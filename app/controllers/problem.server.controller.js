'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    errorHandler = require('./errors.server.controller'),
    Problem = mongoose.model('Problem'),
    _ = require('lodash');

/**
 * Create a Problem
 */
exports.create = function(req, res) {
    var problem = new Problem(req.body);
    if(req.user){
        problem.user = req.user;
    }

    problem.save(function(err) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.jsonp(problem);
        }
    });
};

/**
 * Show the current Problem
 */
exports.read = function(req, res) {
    res.jsonp(req.problem);
};

/**
 * Update a Problem
 */
exports.update = function(req, res) {

};

/**
 * Delete an Problem
 */
exports.delete = function(req, res) {

};

/**
 * List of Problems
 */
exports.list = function(req, res) {
    Problem
        .find()
        //.sort('-created')
        //.populate('headline')
        .exec(function(err, problems) {
        if (err) {
            console.log(err);
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.jsonp(problems);
        }
    });

};

/**
 * Testcrud middleware
 */
exports.problemByID = function(req, res, next, id) {
    Problem.findById(id).exec(function(err, problem) {
        if (err) return next(err);
        if (! problem) return next(new Error('Failed to load Problem ' + id));
        req.problem = problem ;
        next();
    });
};