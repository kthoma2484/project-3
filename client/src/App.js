import React, { Component } from 'react';
import styled from 'react-emotion'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Header from './components/Header'
import Welcome from './pages/Welcome'
import Instructions from './pages/Instructions'
import Gameplay from './pages/Gameplay'
import Highscore from './pages/Highscore'

const Logo = styled('div')({
  fontSize: '40px',
  margin: 10,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'Notable, Cinzel, Archivo Black, sans-serif'
})

const Content = styled('div')({
  marginTop: 10
})

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Logo>
            Trivia Challenger
          </Logo>
          <Header />
          <Content>

            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route path="/instructions" component={Instructions} />
              <Route path="/gameplay" component={Gameplay} />
              <Route path="/highscore" component={Highscore} />
            </Switch>
          </Content>
        </div>
      </Router>
    );
  }
}

export default App;
