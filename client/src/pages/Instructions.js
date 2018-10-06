import React from 'react'
import styled from 'react-emotion'


const InstructionsWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  })
  
  const Instructions = () => (
    <InstructionsWrapper>
      <div>
      <p>
        Game instructions per game option.
      </p>
      </div>
    </InstructionsWrapper>
  )
  
  export default Instructions