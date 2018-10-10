import React, { Component } from 'react';
import styled from 'react-emotion';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
// import UploadScreen from './UploadScreen';
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
      password:''
      }
    }
    
    handleSubmit(event) {
        var apiBaseUrl = "http://localhost:4000/api/";
        // var self = this;
        var payload={
        "email":this.state.username,
        "password":this.state.password
        }
        axios.post(apiBaseUrl+'login', payload)
        .then(function (response) {
        console.log(response);
        if(response.data.code === 200){
        console.log("Login successfull");
        // var uploadScreen=[];
        // uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
        // self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
        }
        else if(response.data.code === 204){
        console.log("Username password do not match");
        alert("username password do not match")
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