const savedNotificationEmitter = require('./Models/article').savedNotificationEmitter;

// Create the chat configuration
module.exports = function(io, socket) {
  savedNotificationEmitter(io,socket);
};