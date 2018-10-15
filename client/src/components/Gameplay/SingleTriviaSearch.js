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

class SingleTriviaSearch extends Component {
    
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
        <h2>Single Player Mode</h2>
        <h4>Difficulty Level</h4>
        <DropdownButton
          title="Select Your Difficulty!"
          key="m-level"
          id="m-level"
              >
              <MenuItem key="m-normal">Normal</MenuItem>
              <MenuItem key="m-hard">Hard</MenuItem>
              <MenuItem key="m-insanity">Insanity</MenuItem>
          </DropdownButton>
        <br/>
        <div key="normal-category">
          <h4>You've choosen normal - choose your category!</h4>
          <Categories results={this.state.results} />
        </div>
      </SearchWrapper>
    </div>
    )
  }
};

export default SingleTriviaSearch;
