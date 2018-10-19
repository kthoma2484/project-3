import React from 'react'
import styled from 'react-emotion'


const InstructionsWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'justify',
    margin: "0 auto",
    maxWidth: "800px",
    fontSize: '18'
})

const divStyle = {
  margin: '20px',
  overflow: 'auto',
  height: '700px'
}

const underline = {
  textDecorationLine: 'underline'
}
  
const Instructions = () => (
    <div style={divStyle}>
      <InstructionsWrapper>
          <h2><em>Single Player Mode and Multi-Player Mode Instructions</em></h2>
            <h3 style={underline}><b>Normal</b></h3>
            <ul>
              <li> (Single Player Mode) Player chooses the trivia category.</li>
              <li> (Multi-Player Mode) Each Player chooses a trivia category. The final game is a mix of all categories chosen.</li>
              <li> Questions selected are 'easy' difficulty level.</li>
              <li> Player has a 120 second time limit to complete all questions.</li>
            </ul>
            <h3 style={underline}><b>Hard</b></h3>
            <ul>
              <li> Game randomly selects trivia category.</li>
              <li> Questions selected are 'medium' difficulty level.</li>
              <li> Player has a starting time limit of 120 seconds to complete all questions. Player is penalized 2 seconds per wrong question answered.</li>
            </ul>
            <h3 style={underline}><b>Insanity</b></h3>
            <ul>
              <li> Game randomly selects trivia category.</li>
              <li> Questions selected are 'hard' difficulty level</li>
              <li> Player has a starting time limit of 120 seconds to complete all questions. Player time decreased 2 seconds per each question answered whether correct or incorrectly answered.</li>
              <li> Random distractors occur during game play.</li>
            </ul>
      </InstructionsWrapper>
    </div>

)
  
  export default Instructions