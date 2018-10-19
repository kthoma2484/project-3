import React, { Component } from 'react';
import styled from 'react-emotion';
import Login from './Login';
import Register from './Register';

const LoginScreenWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 30,
})

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
       
          {this.state.loginmessage}           
               <button label={this.state.buttonLabel} primary={true} style={style} onClick={(event) => this.handleClick(event)}>Submit</button>        
      </LoginScreenWrapper>
    );
  }
}

const style = {
  margin: 15,
};

export default RegLoginScreen;