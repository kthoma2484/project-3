import React, { Component } from 'react';
import styled from 'react-emotion';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

const RegisterWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 30,
})

class Register extends Component {

  render() {
    return (
      <div>
        <RegisterWrapper>
        <MuiThemeProvider>
          <div>
            <h4>
              Register
            </h4>
            <form>
                <label htmlFor="username">
                Enter your email:
                </label>
                <br/>
                <input
                  type="text"
                  name="email"
                  value={this.props.email}
                  onChange= {this.props.handleInputChange}>
                </input>
                <br/>
                <label htmlFor="username">
                Create a username:
                </label>
                <br/>
                <input
                  type="text"
                  name="username"
                  value={this.props.username}
                  onChange= {this.props.handleInputChange}>
                </input>
                <br/>
                <label>
                Create a password:
                </label>
                <br/>
                  <input
                  type="text"
                  name="password"
                  value={this.props.password}
                  onChange = {this.props.handleInputChange}  
                >
                </input>
               </form>
           <br/>
           <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.props.handleClick(event)}/>
          </div>
         </MuiThemeProvider>
        </RegisterWrapper>
      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default Register;

