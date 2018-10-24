import React from 'react'
import styled from 'react-emotion'


const WelcomeWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'justify',
    margin: "0 auto",
    maxWidth: "800px",
    fontSize: "30px",
    '@media (max-width:1020px)': {
      fontSize: '28px',
    },
    '@media (max-width:920px)': {
      fontSize: '22px',
    },
    '@media (max-width:740px)': {
      fontSize: '18px',
    },
    '@media (max-width:580px)': {
      fontSize: '12px',
    }
});

const divStyle = {
  margin: '20px',
  overflow: 'auto',
  height: '600px'
};

const Welcome = () => (
  <div style={divStyle}>
    <WelcomeWrapper>
      <p>
      <em>Welcome to Trivia Challenger!</em>
      </p>
      <br/>
      <p> This is a game to test players knowledge, focus, and ability to think fast and accurately in the face of a challenge - a trivia challenge. The game can be played in single mode on three challenge levels - normal, hard, and insantity
      </p>
      <br/>
      <p> Add to the challenge by playing against friends in the multi-player mode where each player is challenged with the same questions in a race against time and each other. The multi-player mode offers the same three challenge levels as single player mode.
      </p>
    </WelcomeWrapper>
  </div>
);
  
export default Welcome;