import React, { Component } from 'react';
import styled from 'react-emotion';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
// import axios from 'axios';
// import Login from './Login';

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
           <TextField
             hintText="Create a Username"
             floatingLabelText="Userame"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Email"
             type="email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
           <TextField
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
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

