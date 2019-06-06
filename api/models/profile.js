'use strict';
// required the mongoose in our file
var mongoose = require('mongoose'); 
var Schema = mongoose.Schema;

// create a model of how our collection should look like.
/**
 * User Profile schema
 * @constructor Task
 */
var ProfileSchema = new Schema({
  name: {
		type: 'String',
        required: 'Please enter your full name'
	},
	nationality: {
		type: 'String'
	},
	contact: {
		email: {
			type: 'String',
            required: 'Please enter your email'
		},
		web: {
			type: 'String'
		},
		phone: {
			type: 'String'
		},
		phone_prefix: {
			type: 'String'
		}
	},
	education: {
		type: [
			'Mixed'
		]
	},
	experience: {
		type: [
			'Mixed'
		]
	},
	location: {
		postcode: {
			type: 'String'
		},
		city: {
			type: 'String'
		},
		state: {
			type: 'String'
		},
		country: {
			type: 'String'
		}
	},
	reviews: {
		type: [
			'Mixed'
		]
	}
});

module.exports = mongoose.model('Profile', ProfileSchema);