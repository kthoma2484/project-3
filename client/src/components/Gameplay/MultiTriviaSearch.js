import React, { Component } from "react";
import styled from 'react-emotion';

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
});

const optionStyle = {
  color: 'black'
};

class MultiTriviaSearch extends Component {
    
  render() {
    
    return (
    <div>
      <SearchWrapper column>
      <h2>Multi-Player Mode</h2>
      <h4>Difficulty Level</h4>
        <label style={formStyle}>
          <h4 style={formStyle}>Select Your Difficulty</h4>
          <select style={optionStyle} id="m-level" value={this.props.level} onChange={this.props.handleChange}>
            <option style={optionStyle} value='default'>Choose Your Level:</option>
            <option style={optionStyle} value='normal'>Normal</option>
            <option style={optionStyle} value='hard'>Hard</option>
            <option style={optionStyle} value='insanity'>Insanity</option>
          </select>
        </label>
        <br/>
        <label style={formStyle}>
          <h4 style={formStyle}>Select Number of Players</h4>
          <select style={optionStyle} id="playerNum" value={this.props.playerNum} onChange={this.props.handleChange}>
            <option style={optionStyle} value='default'>Number of Players:</option>
            <option style={optionStyle} value='two'>2 Player</option>
            <option style={optionStyle} value='three'>3 Player</option>
            <option style={optionStyle} value='four'>4 Player</option>
          </select>
        </label>
        <br/>
      </SearchWrapper>
    </div>
    )
  };
};

export default MultiTriviaSearch;
