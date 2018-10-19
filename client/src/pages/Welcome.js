import React from 'react'
import styled from 'react-emotion'


const WelcomeWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'justify',
    margin: "0 auto",
    width: "800px",
    height: "200px",
  });
  
  const Welcome = () => (
    <WelcomeWrapper>
      <h4>
          Welcome to Trivia Challenger!
      </h4>
      <p overflow> This is a game to test players knowledge, focus, and ability to think fast and accurately in the face of a challenge - a trivia challenge. The game can be played in single on three challenge levels - normal, hard, and insantity
      </p>
      <br/>
      <p> Add to the challenge by playing against friends in the multi-player mode where each player is challenged with the same questions in a race against time and each other. The multi-player mode offers the same three challenge levels as single player mode.
      </p>
    </WelcomeWrapper>
  );
  
  export default Welcome;