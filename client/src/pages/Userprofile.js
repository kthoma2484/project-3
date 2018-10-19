import React, { Component } from 'react';
import styled from 'react-emotion';
import Game from '../components/Gameplay/Game';

const UserWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
})

class Userprofile extends Component {

    constructor(props){
      super(props);
      this.state={
      username:'Testname',
      }
    }
    
    render() {
        return (
            <UserWrapper column>
                <h4> 
                Welcome User {this.state.username}!
                </h4>
                <br/>
                <a href="/logout" className="btn btn-default btn-sm">Logout</a>
                <br/> 
                <Game />
            </UserWrapper>
        );
      }
    }
    
export default Userprofile