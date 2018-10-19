import axios from "axios";

// The getCategories method retrieves trivia topics from the server
const BASEURL = "http://opentdb.com/api";

export default {
  searchSingleHard: function(query) {
    return axios.get(BASEURL + query);
  },
  searchSingleInsanity: function(query) {
    return axios.get(BASEURL + query);
  }
};
