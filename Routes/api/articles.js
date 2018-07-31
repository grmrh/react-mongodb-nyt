const router = require("express").Router();
const articlesController = require("../../Controllers/articlesController");

// routes for "/api/articles"
router.routes("/")
  .get(articlesController.findAll)
  .post(articlesController.create);

// routes for "/api/articles/:id"
router.routes("/:id")
  .get(articlesController.findById)
  .put(articlesController.update)
  .delete(articlesController.remove);

module.exports = router;