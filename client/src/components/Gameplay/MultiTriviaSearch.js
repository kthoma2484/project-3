import React, { Component } from "react";
import styled from 'react-emotion';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import Categories from "./Categories";
import API from "../../utils/API";

const SearchWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 20,
})

class MultiTriviaSearch extends Component {
    
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
      <SearchWrapper>
      <h2>Multi-Player Mode</h2>
      <h4>Difficulty Level</h4>
       <DropdownButton
        title="Select Your Difficulty"
        key="s-level"
        id="s-level"
            >
            <MenuItem key="s-normal">Normal</MenuItem>
            <MenuItem key="s-hard">Hard</MenuItem>
            <MenuItem key="s-insanity">Insanity</MenuItem>
        </DropdownButton>
      <br/>
      <h4>Number of Players</h4>
       <DropdownButton
        title="Select Number of Players"
        key="players"
        id="players"
            >
            <MenuItem key="one">1 Player</MenuItem>
            <MenuItem key="two">2 Players</MenuItem>
            <MenuItem key="three">3 Players</MenuItem>
            <MenuItem key="four">4 Players</MenuItem>
        </DropdownButton>
      <br/>
      <div key="normal-category">
        <h4>You've choosen normal - choose your categories</h4>
        <div key="player1-cat">
          <p>Player 1 Category</p>
          <Categories results={this.state.results} key="player1-select"/>
        </div>
        <div key="player2-cat">
          <p>Player 2 Category</p>
          <Categories results={this.state.results} key="player2-select"/>
        </div>
        <div key="player3-cat">
          <p>Player 3 Category</p>
          <Categories results={this.state.results} key="player3-select"/>
        </div>
        <div key="player4-cat">
          <p>Player 4 Category</p>
          <Categories results={this.state.results} key="player4-select"/>
        </div>
      </div>
      </SearchWrapper>
    </div>
    )
  }
};

export default MultiTriviaSearch;
