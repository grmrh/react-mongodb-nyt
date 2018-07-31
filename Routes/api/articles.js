const router = require("express").Router();
const articlesController = require("../../Controllers/articlesController");

// routes for "/api/articles"
router.route("/")
  .get(articlesController.findAll)
  .post(articlesController.create);

// routes for "/api/articles/:id"
router.route("/:id")
  .get(articlesController.findById)
  .put(articlesController.update)
  .delete(articlesController.remove);

module.exports = router;