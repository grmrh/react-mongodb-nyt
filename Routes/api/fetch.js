var router = require("express").Router();
var fetchController = require("../../controllers/fetchController");

router.route("/")
  .get(fetchController.scrapeArticles);     //or router.get("/", fetchController.scrapeArticles);

module.exports = router;