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
    },
    signature: {
        type: String,
        trim: true,
        default: ''
    },
    lat: {
        type: Number
    },
    lng: {
        type: Number
    }
});

mongoose.model('Problem', ProblemSchema);