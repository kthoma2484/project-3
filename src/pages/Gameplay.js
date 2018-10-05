import React from 'react'
import styled from 'react-emotion'


const GamePlayWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  })
  
  const Gameplay = () => (
    <GamePlayWrapper>
      <p>
          Gameplay options on this page!
      </p>
    </GamePlayWrapper>
  )
  
  export default Gameplay