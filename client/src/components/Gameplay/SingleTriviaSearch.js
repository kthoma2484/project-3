import React, { Component } from "react";
import styled from 'react-emotion';
import Categories from "./Categories";

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
};

const SearchWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 20,
})

class SingleTriviaSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'default',
    };
  };

  handleChange = event => {
    var result = event.target.value;
    console.log(result);
    this.setState({
      value: event.target.value, 
      name: event.target.name
    })
    this.showCategories(result);
  };
 
  componentDidUpdate = () => {
    console.log(this.state);
  }
  
  showCategories= value => {
    if (value === 'default') {
      console.log("No level choosen");
    };
    if (value === 'hard') {
      console.log("You have choosen: " + value);
    };
    if (value === 'insanity') {
      console.log("You have choosen: " + value);
    }
    if (value === 'normal') {
      console.log("You have choosen normal - now choose categories");
      return  <div key="normal-category">
      <h4>You've choosen normal - choose your categories</h4>
        <Categories results2={this.props.results2} />
      </div>
    };
  };

  render() {
    
    return (
    <div>
      <SearchWrapper>
        <h2>Single Player Mode</h2>
        <h4>Difficulty Level</h4>
        <form onSubmit={this.handleSubmit}>
          <label style={formStyle}>
            <h4 style={formStyle}>Select Your Difficulty</h4>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value='default'>Choose Your Level:</option>
              <option value='normal'>Normal</option>
              <option value='hard'>Hard</option>
              <option value='insanity'>Insanity</option>
            </select>
          </label>
          <br/>
          {this.showCategories(this.state.value)}
        </form>
      </SearchWrapper>
    </div>
    )
  }
};

export default SingleTriviaSearch;
