import React, { Component } from 'react';
import styled from 'react-emotion';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
// import TextField from 'material-ui/TextField';
// import axios from 'axios';
// import { Redirect } from 'react-router';


const LoginWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
})

class Login extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      
   }
 }
 
    render() {
        return (
          <div>
            <LoginWrapper>
            <MuiThemeProvider>
              <div>
              <h4>
                Login
               </h4>
               <form>
                <label htmlFor="username">
                Enter your username:
                </label>
                <input
                 type="text"
                 name="username"
                 value={this.props.username}
                 onChange= {this.props.handleInputChange}>
                </input>
                <br/>
                <label>
                Enter user password:
                </label>
                <input
                type="text"
                name="password"
                value={this.props.password}
                onChange = {this.props.handleInputChange}  
                >
                </input>
               </form>
               <br/>
                 <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.props.handleSubmit(event)}/>
             </div>
             </MuiThemeProvider>
             </LoginWrapper>
          </div>
        );
      }
    }
    
    const style = {
     margin: 15,
    };
    
  
export default Login