const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./Routes");
const PORT = process.env.PORT || 3001;
const app = express();
const iomiddleware = require('./iomiddleware')
const http = require('http').Server(app);
// wire up the express server to socket.io
const io = require('socket.io')(http);
iomiddleware(io, null);

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
app.use(express.static('./public'));

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact");

http.listen(PORT, function() {
  console.log(`🌎 ==> API Server now listening on port ${PORT}!`);
});
