import React, { Component } from "react";
import SingleTriviaSearch from "./SingleTriviaSearch";
import MultiTriviaSearch from "./MultiTriviaSearch";
import API from "../../utils/API";

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
};

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'default',
      results2: [
        {"id": 9, "name": "General Knowledge"},
        {"id": 10, "name": "Entertainment: Books"},
        {"id": 11, "name": "Entertainment: Film"},
        {"id": 12, "name": "Entertainment: Music"},
        {"id": 13, "name": "Entertainment: Musicals & Theatres"},
        {"id": 14, "name": "Entertainment: Television"},  ]
    };
  };

  // state = {
  //   // search: "",
  //   results: []
  // };
  showMode = value => {
    if (value === 'default') {
      console.log("No mode choosen");
    };
    if (value === 'singleMode') {
      console.log("You chose single mode");
      return <SingleTriviaSearch results2={this.state.results2}/>
    };
    if (value === 'multiMode') {
      console.log("You chose multiplayer mode");
      return <MultiTriviaSearch results={this.state.results}/>
    };
  };

  handleChange = event => {
    var result = event.target.value;
    console.log(result);
    this.setState({value: event.target.value})
    this.showMode(result);
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchCategories(this.state.search);
  };

  searchCategories = () => {
    API.getCategories("_category.php/")
      .then(res => this.setState({ results: res.data.trivia_categories}))
      .catch(err => console.log(err));
  };

  // When this component mounts, search the trivia categories
  componentDidMount = () => {
    this.searchCategories();
  }

  render() {
    console.log("this is rendered.")
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label style={formStyle}>
          <h4 style={formStyle}>Select your game mode and options:</h4>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value='default'>Choose Your Mode:</option>
            <option value='singleMode'>Single Player Mode</option>
            <option value='multiMode'>Multi-Player Mode</option>
          </select>
        </label>
      </form>
      {this.showMode(this.state.value)}
      </div>
    );
  }
}

export default Game;
