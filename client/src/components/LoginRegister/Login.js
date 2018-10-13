import React, { Component } from 'react';
import styled from 'react-emotion';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';


const LoginWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
})

class Login extends Component {

    constructor(props){
      super(props);
      this.state={
      username:'',
      password:'',
      }
    }
    
    handleSubmit(event) {
        var apiBaseUrl = "http://localhost:3001/api/";
        // var self = this;
        var payload={
        "username":this.state.username,
        "password":this.state.password
        }
        
        axios.post(apiBaseUrl+'login', payload)
        .then(function (response) {
        console.log(response);
        //console.log("code is: " + response.status)
        if(response.status === 200){
        console.log("Login successfull");

      }
        else if(response.status === 204){
        console.log("Username password do not match");
        alert("Username password do not match")
        }
        else{
        console.log("Username does not exists");
        alert("Username does not exist");
        }
        })
        .catch(function (error) {
        console.log(error);
        });
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
               <TextField
                 hintText="Enter your Username"
                 floatingLabelText="Username"
                 onChange = {(event,newValue) => this.setState({username:newValue})}
                 />
               <br/>
                 <TextField
                   type="password"
                   hintText="Enter your Password"
                   floatingLabelText="Password"
                   onChange = {(event,newValue) => this.setState({password:newValue})}
                   />
                 <br/>
                 <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleSubmit(event)}/>
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