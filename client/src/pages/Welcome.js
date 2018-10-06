import React from 'react'
import styled from 'react-emotion'


const WelcomeWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  })
  
  const Welcome = () => (
    <WelcomeWrapper>
      <p>
          Game intro on welcome page!
      </p>
    </WelcomeWrapper>
  )
  
  export default Welcome