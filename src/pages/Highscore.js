import React from 'react'
import styled from 'react-emotion'


const HighScoreWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  })
  
  const Highscore = () => (
    <HighScoreWrapper>
      <p>
          High score boards are here!
      </p>
    </HighScoreWrapper>
  )
  
  export default Highscore