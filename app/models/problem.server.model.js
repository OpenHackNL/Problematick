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
    },
    date: {
        type: Date
    }
});

mongoose.model('Problem', ProblemSchema);