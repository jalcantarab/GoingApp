'use strict';
module.exports = function(app) {
  var profileInfo = require('../controllers/todoListController');

  // Profile Information Routes
  app.route('/profile')
    .get(profileInfo.list_all_tasks)
    .post(profileInfo.create_a_task);


  app.route('/tasks/:taskId')
    .get(profileInfo.read_a_task)
    .put(profileInfo.update_a_task)
    .delete(profileInfo.delete_a_task);
};