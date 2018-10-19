import React, { Component } from "react";
import styled from 'react-emotion';
// import SingleTriviaSearch from "./SingleTriviaSearch";
// import MultiTriviaSearch from "./MultiTriviaSearch";
// import API from "../../utils/API";

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
};

const GameWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const optionStyle = {
  color: 'black'
}; 

class Game extends Component {
  

  // state = {
  //   // search: "",
  //   results: []
  // };
  // showMode = value => {
  //   if (value === 'default') {
  //     console.log("No mode choosen");
  //   };
  //   if (value === 'singleMode') {
  //     console.log("You chose single mode");
  //     return <SingleTriviaSearch categories={this.props.categories} showCategories={this.props.showCategories}/>
  //   };
  //   if (value === 'multiMode') {
  //     console.log("You chose multiplayer mode");
  //     return <MultiTriviaSearch categories={this.props.categories}/>
  //   };
  // };

  // handleChange = event => {
  //   var result = event.target.value;
  //   console.log(result);
  //   this.setState({value: event.target.value})
  //   this.showMode(result);
  // };

  // // When the form is submitted, search the Giphy API for `this.state.search`
  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   // this.searchTrivia(this.state.search);
  //   // this.state.mode = "single";
  //   console.log(this.state.mode);

  //   // this.state.level= "hard";
  //   console.log(this.state.level);

  //   this.searchTrivia();
  //   console.log(this.state.questions);
  // };

  // searchTrivia = () => {
    
  //   if (this.state.mode === "single" && this.state.level === "hard") {
  //     var query = ".php?amount=20&difficulty=medium"
  //     API.searchSingleHard(query)
  //       .then(res => this.setState({ questions: res.data.results}))
  //       .catch(err => console.log(err));
  //     }
  // };

  // // When this component mounts, search the trivia categories
  // componentDidMount = () => {
  //   this.searchTrivia();
  // }

  render() {
    return (
      <GameWrapper column>
      <form onSubmit={this.handleSubmit}>
        <label style={formStyle}>
          <h4 style={formStyle}>Select your game mode and options:</h4>
          <select id="mode" style={optionStyle} value={this.props.mode} onChange={this.props.handleChange}>
            <option style={optionStyle} value='default'>Choose Your Mode:</option>
            <option style={optionStyle} value='singleMode'>Single Player Mode</option>
            <option style={optionStyle} value='multiMode'>Multi-Player Mode</option>
          </select>
        </label>
      </form>
      <br/>
      <div>
      {this.props.showMode(this.props.mode)}
      </div>
      </GameWrapper>
    );
  }
}

export default Game;
