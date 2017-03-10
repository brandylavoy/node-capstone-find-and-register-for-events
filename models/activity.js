var mongoose = require('mongoose');

var activitySchema = new mongoose.Schema({
    name: { type: String, required: false },
    type: { type: String, required: false }
});

var activity = mongoose.model('activity', activitySchema);

module.exports = activity;