import React, { Component } from 'react';
import styled from 'react-emotion';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Login from './Login';
import Register from './Register';

const LoginScreenWrapper = styled('div')({
  display: 'flex',
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
      // loginscreen:[],
      // loginmessage:'',
      buttonLabel:'Register',
      isLogin:true
    }
  }

  // componentDidMount(){
  //   var loginscreen=[];
  //   loginscreen.push(<Login username={this.props.username} password={this.props.password} email={this.props.email} handleInputChange={this.props.handleInputChange} key={Date.now()} parentContext={this} appContext={this.props.parentContext}/>);
  //   var ;
  //   this.setState({
  //                 loginscreen:loginscreen,
  //                 loginmessage:loginmessage
  //                   })
  // }
  
  handleClick(event){
    // console.log("event",event);
    // var loginmessage;
    // var loginscreen=[];
    if(this.state.isLogin){
      // loginscreen.push(<Register username={this.props.username} password={this.props.password} email={this.props.email} handleInputChange={this.props.handleInputChange} key={Date.now()} parentContext={this}/>);
      // loginmessage = "Already registered.Go to Login";
      this.setState({
        loginmessage: "Not registered yet, Register Now",
        buttonLabel:'Register',   
        isLogin:false
        })
    }
    else{
      this.setState({
        loginmessage: "Already registered.Go to Login",
        buttonLabel:'Login',
        isLogin:true
      })
    }
  }

  render() {
    return (
      <div className="loginscreen">
      <LoginScreenWrapper>
        {this.state.isLogin ? 
          (<Login username={this.props.username} password={this.props.password} email={this.props.email} handleInputChange={this.props.handleInputChange} handleSubmit={this.props.handleSubmit} parentContext={this} appContext={this.props.parentContext}/>)
          :
          (<Register username={this.props.username} password={this.props.password} email={this.props.email} handleInputChange={this.props.handleInputChange} handleClick={this.props.handleClick} parentContext={this}/>)
        }
        <div>
          {this.state.loginmessage}
          <MuiThemeProvider>
            <div>
               <RaisedButton label={this.state.buttonLabel} primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
           </div>
          </MuiThemeProvider>
        </div>
      </LoginScreenWrapper>
      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default RegLoginScreen;