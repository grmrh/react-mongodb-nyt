const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  summary: { type: String, required: false }, 
  date: { type: Date, default: Date.now }, 
  saved: { type: Boolean, default: false }
});

module.exports = {
  savedNotificationEmitter: function(io, socket) {
    articleSchema.post('save', function(articleSaved) {
      console.log('post hook title: ', `<a href=${articleSaved.url}><strong><h4>${articleSaved.title}</h4></strong></a>`);
      io.emit('NOTIFY_ALL', articleSaved.title);
    })
  },

  getArticle: function() {
    const Article = mongoose.model("Article", articleSchema);
    return Article;
  }
};



