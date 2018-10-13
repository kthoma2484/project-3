import React, { Component } from 'react';
import styled from 'react-emotion';
import Game from '../Gameplay/Game';

const UserWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
})

class Userprofile extends Component {

    constructor(props){
      super(props);
      this.state={
      username:'',
      }
    }
    
    render() {
        return (
          <div>
            <UserWrapper>
                <h4> 
                    Welcome User {this.username}!
                </h4>
                <br/>
            <Game />
            </UserWrapper>

          </div>
        );
      }
    }
    
    const style = {
     margin: 15,
    };
    
  
export default Userprofile