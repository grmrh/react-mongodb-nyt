import axios from "axios";

export default {
  // Gets all Articles
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets the Article with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the Article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a Article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  },
  // // The getRecipes method retrieves recipes from the server
  // It accepts a "query" or term to search the recipe api for
  getNYTArticles: function(queryURL) {
    //return axios.get("/api/fetch", { params: {q: queryURL } });
    return axios.get(queryURL);
  }
};