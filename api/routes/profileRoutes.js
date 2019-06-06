'use strict';
module.exports = function(app) {
  var profile = require('../controllers/profileController');
  
  // Schema of the profiles
  app.route('/profile/schema')
    .get(profile.get_schema);

  // All Profiles of the individual
  app.route('/profiles')
    .get(profile.get_all_profiles);

  // Profile Information Routes
  app.route('/profile/:profileId')
    .get(profile.get_profile);
  // Create a Profile Information
  app.route('/profile/new')
    .post(profile.set_profile);
};