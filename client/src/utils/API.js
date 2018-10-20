import axios from "axios";

// The getCategories method retrieves trivia topics from the server
const BASEURL = "http://opentdb.com/api";

export default {
  searchTriviaApi: function(query) {
    return axios.get(BASEURL + query);
  }
};
