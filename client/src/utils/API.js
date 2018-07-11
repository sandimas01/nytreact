import axios from "axios";

const apiKey = process.env.REACT_APP_NY_TIMES_API_KEY;

export default {
  // Gets all articles
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // // Gets the article with the given id
  // getArticle: function(id) {
  //   return axios.get("/api/articles/" + id);
  // },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  },

  findArticles: function(topic, startYear, endYear) {
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey + "&q=" + topic + "&begin_date=" + startYear + "0101&end_date=" + endYear + "1231");
  }
};