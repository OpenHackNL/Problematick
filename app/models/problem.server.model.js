'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Problem Schema
 */
var ProblemSchema = new Schema({
	headline: {
        type: String,
        trim: true,
        default: ''
    }
});

mongoose.model('Problem', ProblemSchema);