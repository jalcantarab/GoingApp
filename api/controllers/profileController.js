'use strict';

var mongoose = require('mongoose'),
  Profile = mongoose.model('Profile');

mongoose.set('useFindAndModify', false);

/**
 * Route listing the whole profile.
 * @name get/profile
 * @function
 * @memberof module:routers/profile~usersRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
exports.get_schema = function(req, res) {
  console.log(Profile);
    res.json(Profile);
};

exports.get_all_profiles = function(req, res) {
  Profile.find({}, function(err, profile) {
    if (err)
      res.send(err);
    res.json(profile);
  });
};

exports.get_profile = function(req, res) {
  Profile.findById(req.params.profileId, function(err, profile) {
    if (err)
      res.send(err);
    res.json(profile);
  });
};

exports.set_profile = function(req, res) {
  var new_profile = new Profile(req.body);
  new_profile.save(function(err, profile) {
    if (err)
      res.send(err);
    res.json(profile);
  });
};