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

class MultiTriviaSearch extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      value: 'default',
      name: 'default'
    };
  };

  componentDidUpdate = () => {
    console.log(this.state);
  }

  showCategories= value => {
    if (value === 'default') {
      console.log("No level choosen");
    };
    if (value === 'hard' || value === 'insanity') {
      console.log("You have choosen: " + value);
    };
    if (value === 'hard' || value === 'insanity') {
      console.log("You have choosen: " + value);
    }
    if (value === 'normal') {
      console.log("You have choosen normal - now choose categories");
      return  <div key="normal-category">
      <h4>You've choosen normal - choose your categories</h4>
      {this.showPlayerNum(this.state.name)}
    </div>
    };
  };

  showPlayerNum= name => {
    if (name === 'default') {
      console.log("No number selected for players");
    };
    if (name === 'four') {
      console.log("Four players selected");
      return <div>
      <div key="player2-cat">
        <p>Player 2 Category</p>
        <Categories results={this.props.results} key="player2-select"/>
      </div>
      <div key="player3-cat">
        <p>Player 3 Category</p>
        <Categories results={this.props.results} key="player3-select"/>
      </div>
      <div key="player4-cat">
        <p>Player 4 Category</p>
        <Categories results={this.state.results} key="player4-select"/>
      </div>
      </div>
    };
    if (name === 'three') {
      console.log("Three players selected");
      return <div>
      <div key="player2-cat">
        <p>Player 2 Category</p>
        <Categories results={this.props.results} key="player2-select"/>
      </div>
      <div key="player3-cat">
        <p>Player 3 Category</p>
        <Categories results={this.props.results} key="player3-select"/>
      </div>
      </div>
    };
    if (name === 'two') {
      console.log("Three players selected");
      return <div>
      <div key="player2-cat">
        <p>Player 2 Category</p>
        <Categories results={this.props.results} key="player2-select"/>
      </div>
      </div>
    };
  }

  handleChange = event => {
    var result = event.target.value;
    var result2 = event.target.name;
    console.log(result);
    console.log(result2);
    this.setState({
      value: event.target.value, 
      name: event.target.name
    })
    this.showCategories(result);
    this.showPlayerNum(result2);

  };

  render() {
    
    return (
    <div>
      <SearchWrapper>
      <h2>Multi-Player Mode</h2>
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
        <label style={formStyle}>
          <h4 style={formStyle}>Select Number of Players</h4>
          <select name={this.state.name} onChange={this.handleChange}>
            <option name='default'>Choose Number of Players:</option>
            <option name='two'>2 Player</option>
            <option name='three'>3 Player</option>
            <option name='four'>4 Player</option>
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

export default MultiTriviaSearch;
