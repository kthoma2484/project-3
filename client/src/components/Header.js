import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'react-emotion'

const HeaderWrapper = styled('header')({
  width: '100%',
  height: 30,
  boxShadow: '0 2px 2px 2px rgba(0,0,0,.3)',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  marginBottom: 20,
  fontSize: '30px',
  '@media (max-width:1020px)': {
    fontSize: '27px',
  },
  '@media (max-width:920px)': {
    fontSize: '24px',
  },
  '@media (max-width:740px)': {
    fontSize: '20px',
  },
  '@media (max-width:580px)': {
    fontSize: '12px',
  }
})

const Header = () => (
  <HeaderWrapper>
    <Link to="/">Welcome</Link>
    <Link to="/instructions">Instructions</Link>
    <Link to="/gameplay">Game Play</Link>
    <Link to="/highscore">High Score Boards</Link>
  </HeaderWrapper>
)

export default Header