import React from 'react';
import styled from 'react-emotion';
import Game from "../components/Game";
import Login from "../components/Login";

const GamePlayWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
})

const Gameplay = () => (
    <GamePlayWrapper>
      <Login />


      <Game />
    </GamePlayWrapper>
)
  
export default Gameplay