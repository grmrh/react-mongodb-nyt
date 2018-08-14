const router = require("express").Router();
const articleRoutes = require("./articles");
// const fetchRoutes = require("./fetch");

router.use("/articles", articleRoutes);
// router.use("/fetch", fetchRoutes);

module.exports = router;