const db = require("../Models");
const article = require('../Models/article');

const Article = article.getArticle();

// Defining methods for the articleController
module.exports = {

  findAll: (req, res) => {
    Article
      .find(req.query)
      .sort({date: -1})
      .then(dbModel => res.json(dbModel)) 
      .catch(err => res.Status(422).json(err));
  }, 
  findById: function(req, res) {
    Article
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    Article
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    Article
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    const newArticle = new Article ({
      title: req.body.title,
      url: req.body.url,
      saved: true});
    newArticle.save().then(newArticle => {
      //console.log("articleController inside save() \n", newArticle);
      res.json(newArticle)});
  }
}