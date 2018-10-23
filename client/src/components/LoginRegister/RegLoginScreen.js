import React, { Component } from 'react';
import styled from 'react-emotion';
import Login from './Login';
import Register from './Register';

const LoginScreenWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const buttonStyle = {
  color: 'darkblue',
  margin: 15,
};

class RegLoginScreen extends Component {

  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      loginmessage: "Not registered yet, Register Now",
      buttonLabel:'Register',
      isLogin:true
    };
  };
  
  // Click handler switches between the registration and login page
  handleClick(event){
    if(this.state.isLogin){
      this.setState({
        loginmessage: "Already registered.Go to Login",
        buttonLabel:'Login',   
        isLogin:false
        });
    }
    else{
      this.setState({
        loginmessage: "Not registered yet, Register Now",
        buttonLabel:'Register',
        isLogin:true
      });
    };
  };

  render() {
    return (
      <LoginScreenWrapper column>
        {this.state.isLogin ? 
          (<Login username={this.props.username} password={this.props.password} email={this.props.email} handleInputChange={this.props.handleInputChange} handleSubmit={this.props.handleSubmit} parentContext={this} appContext={this.props.parentContext}/>)
          :
          (<Register username={this.props.username} password={this.props.password} email={this.props.email} handleInputChange={this.props.handleInputChange} handleClick={this.props.handleClick} parentContext={this}/>)
        }
        <br/>
        {this.state.loginmessage}  
        <button style={buttonStyle} label={this.state.buttonLabel} onClick={(event) => this.handleClick(event)}>{this.state.buttonLabel}</button>        
      </LoginScreenWrapper>
    );
  }
};

export default RegLoginScreen;