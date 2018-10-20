import React, { Component } from "react";
import styled from 'react-emotion';
import Questions from './Questions';

const gameStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
};
  
const TriviaWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})


class TriviaGame extends Component {

    constructor(props) {
        super(props);
        this.state = {
          value: ""
        };
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
        [name]: value
        });

        this.setState({value: event.target.value});
        this.activeGame(value);
    };

    activeGame = value => {

        if (this.props.level === 'hard' && value === "wrong") {
            console.log("Time will be decreased by 2secs for each wrong answer");
        }
        if (this.props.level === 'insanity' && value === true) {
            console.log("Time will decrease by 2 seconds for every selection made");
            console.log("Random distractors will occur");
        }
    }

    render() { 

        return (
            <div style={gameStyle}>
            <TriviaWrapper column>
                <Questions value={this.state.value} activeGame={this.activeGame} categories={this.props.categories} questions={this.props.questions}mode={this.props.mode} level={this.props.level} playerNum={this.props.playerNum} categoryPick={this.props.categoryPick} handleChange={this.handleChange} showMode={this.showMode} showCategories={this.showCategories} handleSubmit={this.handleSubmit}/>
            </TriviaWrapper>
            </div>
        )
    }       
};
  
export default TriviaGame;