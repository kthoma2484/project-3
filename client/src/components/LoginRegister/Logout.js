import React, { Component } from 'react';
import styled from 'react-emotion';

const LogoutWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
});

const underline = {
  textDecorationLine: 'underline'
};

const formStyle = {
  color: 'black'
};

class Logout extends Component {
 
  render() {
    return (
        <LogoutWrapper column>
          <h2 style={underline}>
            <em>You have successfully Logged out.</em>
          </h2>
        </LogoutWrapper>
    );
  }    
};
  
export default Logout;