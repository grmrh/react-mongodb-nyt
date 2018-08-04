// Controller for our scraper
// ============================
var db = require("../models");
var scrape = require("../scripts/scrape");

module.exports = {
  scrapeArticles: function(req, res) {
    // scrape the NYT
    return scrape()
      .then(function(articles) {
        // then insert articles into the db
        console.log("fetch controller \n", articles);
        return db.Article.create(articles);
      })
      .then(function(dbArticle) {
        if (dbArticle.length === 0) {
          res.json({
            message: "No new articles today. Check back tomorrow!"
          });
        }
        else {
          console.log("dbArticle \n", dbArticle)
          //Otherwise send back a count of how many new articles we got
          res.json({
            message: "Added " + dbArticle.length + " new articles!"
          });
          //res.json(dbArticle);
        }
      })
      .catch(function(err) {
        // This query won't insert articles with duplicate Articles, but it will error after inserting the others
        res.json({
          message: "Scrape complete!!"
        });
      });
  }
};

