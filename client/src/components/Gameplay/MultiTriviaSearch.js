import React, { Component } from "react";
import styled from 'react-emotion';
// import Categories from "./Categories";

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

const buttonStyle = {
  color: 'darkblue',
  margin: 15,
};

const optionStyle = {
  color: 'black'
};

class MultiTriviaSearch extends Component {
    
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: 'default',
  //     name: 'default'
  //   };
  // };

  componentDidUpdate = () => {
    console.log(this.state);
  }

  // showCategories= value => {
  //   if (value === 'default') {
  //     console.log("No level choosen");
  //   };
  //   if (value === 'hard' || value === 'insanity') {
  //     console.log("You have choosen: " + value);
  //   };
  //   if (value === 'hard' || value === 'insanity') {
  //     console.log("You have choosen: " + value);
  //   }
  //   if (value === 'normal') {
  //     console.log("You have choosen normal - now choose categories");
  //     return  <div key="normal-category">
  //     <h4>You've choosen normal - choose your categories</h4>
  //     {this.showPlayerNum(this.state.name)}
  //   </div>
  //   };
  // };

 

  // handleChange = event => {
  //   var result = event.target.value;
  //   var result2 = event.target.name;
  //   console.log(result);
  //   console.log(result2);
  //   this.setState({
  //     value: event.target.value, 
  //     name: event.target.name
  //   })
  //   this.showCategories(result);
  //   this.showPlayerNum(result2);

  // };

  render() {
    
    return (
    <div>
      <SearchWrapper>
      <h2>Multi-Player Mode</h2>
      <h4>Difficulty Level</h4>
      <form onSubmit={this.handleSubmit}>
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
            <option style={optionStyle} value='default'>Choose Number of Players:</option>
            <option style={optionStyle} value='two'>2 Player</option>
            <option style={optionStyle} value='three'>3 Player</option>
            <option style={optionStyle} value='four'>4 Player</option>
          </select>
        </label>
        <br/>
        {this.showCategories(this.state.value)}
      </form>
      <button style={buttonStyle} label="Create Game" onClick={(event) => this.props.handleSubmit(event)}>Create Game!</button>
      </SearchWrapper>
    </div>
    )
  }
};

export default MultiTriviaSearch;
