import React, { Component } from 'react';
import styled from 'react-emotion';

const RegisterWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
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

class Register extends Component {

  render() {
    return (
        <RegisterWrapper column>
            <h2 style={underline}>
              <em>Register</em>
            </h2>
            <form>
                <label htmlFor="email">
                Enter your email:
                </label>
                <br/>
                <input style={formStyle}
                  type="email"
                  name="email"
                  value={this.props.email}
                  onChange= {this.props.handleInputChange}>
                </input>
                <br/>
                <label htmlFor="username">
                Create a username:
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
                Create a password:
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
           <button style={buttonStyle} label="Submit" onClick={(event) => this.props.handleClick(event)}>Submit</button>
        </RegisterWrapper>
    );
  }
};

export default Register;

