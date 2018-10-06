import React, { Component } from "react";
import Categories from "./Categories";
// import TriviaSearch from "./TriviaSearch";
import API from "../utils/API";

class Game extends Component {

  state = {
    // search: "",
    results: []
  };

  // When this component mounts, search the trivia categories
  componentDidMount = () => {
    this.searchCategories();
  }

  searchCategories = () => {
    API.getCategories("_category.php/")
      .then(res => this.setState({ results: res.data.trivia_categories}))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchCategories(this.state.search);
  };
 
  componentDidUpdate = () => {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        {/* <TriviaSearch
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        /> */}      
        <Categories results={this.state.results} /> 
      </div>

    );
  }
}

export default Game;
