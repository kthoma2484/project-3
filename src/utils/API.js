import axios from "axios";

// The getCategories method retrieves trivia topics from the server

export default {
  getCategories: function() {
    return axios.get("/api/categories");
  }
};
