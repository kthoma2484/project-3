import React, { Component } from 'react';
import styled from 'react-emotion';

const LoginWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
});

const buttonStyle = {
  color: 'darkblue',
  margin: 15,
};

const underline = {
  textDecorationLine: 'underline'
};

const formStyle = {
  color: 'black'
};

class Login extends Component {
 
  render() {
    return (
        <LoginWrapper column>
          <h2 style={underline}>
            <em>Login</em>
          </h2>
          <form>
            <label htmlFor="username">
            Enter your username:
            </label>
            <br/>
            <input style={formStyle}
            type="text"
            name="username"
            value={this.props.username}
            onChange= {this.props.handleInputChange}>
            </input>
            <br/>
            <label htmlFor="password">
            Enter user password:
            </label>
            <br/>
            <input style={formStyle}
            type="password"
            name="password"
            value={this.props.password}
            onChange = {this.props.handleInputChange}  
            >
            </input>
          </form>
          <br/>
            <button style={buttonStyle} label="Submit" onClick={(event) => this.props.handleSubmit(event)}>Submit</button>
        </LoginWrapper>
    );
  }    
};
  
export default Login;