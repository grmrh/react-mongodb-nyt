const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API routes
router.use('/api', apiRoutes);

// Define any API routes before this runs
// Send every request to the React app if noAPI routes are hit
router.use(function(req, res) {
  res.sendFile(path.join (__dirname, "../client/build/index.html"));
});

module.exports = router;