import React, { Component } from "react";
import SingleTriviaSearch from "./SingleTriviaSearch";
import MultiTriviaSearch from "./MultiTriviaSearch";

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
      value: 'default'
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  };

  
  showMode = value => {
    if (value === 'default') {
      console.log("No mode choosen");
    };
    if (value === 'singleMode') {
      console.log("You chose single mode");
      return <SingleTriviaSearch />
    };
    if (value === 'multiMode') {
      console.log("You chose multiplayer mode");
      return <MultiTriviaSearch />
    };
  };

  handleChange = event => {
    var result = event.target.value;
    console.log(result);
    this.setState({value: event.target.value})
    this.showMode(result);
  };

  render() {
    console.log("this is rendered.")
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label style={formStyle}>
          <h4 style={formStyle}>Select your game mode and options.</h4>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value='default'>Choose Your Mode:</option>
            <option value='singleMode'>Single Player Mode</option>
            <option value='multiMode'>Multi-Player Mode</option>
          </select>
          {this.showMode(this.state.value)}
          {/* <SingleTriviaSearch value={this.state.value}/>  */}
          {/* <MultiTriviaSearch value={this.state.value}/>  */}
        </label>
      </form>
      </div>
    );
  }
}

export default Game;
