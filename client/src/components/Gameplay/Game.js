import React, { Component } from "react";
import styled from 'react-emotion';

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

const buttonStyle = {
  color: 'darkblue',
  margin: 'auto 0',

};

class Game extends Component {

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
          <div>
            {this.props.showMode(this.props.mode)}
            {this.props.level === "normal" ?
              this.props.showCategories(this.props.level)
              :
              null
            }
            <br/>
            {this.props.level === 'default' || this.props.mode === 'default' ?
              null
              :
              <button id="triviaSearch" style={buttonStyle} label="Create Game" onClick={(event) => this.props.handleSubmit(event)}>Create Game!</button>  
            }
          </div>
        </label>
      </form>
      <br/>
      </GameWrapper>
    );
  }
};

export default Game;
