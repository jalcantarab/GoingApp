'use strict';
// required the mongoose in our file
var mongoose = require('mongoose'); 
var Schema = mongoose.Schema;

// create a model of how our collection should look like.
/**
 * TaskSchema schema
 * @constructor Task
 */
var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);