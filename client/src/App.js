import React, { Component } from 'react';
import styled from 'react-emotion';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Header from './components/Header';
import Welcome from './pages/Welcome';
import Instructions from './pages/Instructions';
import Gameplay from './pages/Gameplay';
import Highscore from './pages/Highscore';
import Userprofile from './pages/Userprofile';
import axios from "axios";
import Login from './components/LoginRegister/Login';
import './App.css'; 

const Logo = styled('div')({
  fontSize: '60px',
  color: "rgba(133, 232, 58, .8)",
  boxShadow: '5px 5px solid black',
  margin: 10,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'Notable, Cinzel, Archivo Black, sans-serif',
  marginBottom: '20',
  '@media (max-width:1020px)': {
    fontSize: '50px',
  },
  '@media (max-width:920px)': {
    fontSize: '40px',
  },
  '@media (max-width:740px)': {
    fontSize: '30px',
  },
  '@media (max-width:580px)': {
    fontSize: '20px',
  }
});

const Content = styled('div')({
  marginTop: 10,
});

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        playerid: '',
        username: '',
        password: '',
        email: '',
        singlescore: '',
        multiplayscore: '',
        loggedIn: false,
    };
  };


  handleSubmit = event => {
    event.preventDefault();

    console.log("running request")
    var apiBaseUrl = "https://fast-dusk-26414.herokuapp.com";
    var payload={
    "username":this.state.username,
    "password":this.state.password
    };
    
    axios.post(apiBaseUrl+'/login', payload)
    .then(response => {
      console.log(response);
      console.log("code is: " + response.status)
      if (response.status === 302 || response.status === 200){
        console.log("Login successfull");        
        this.setState({ 
          loggedIn : true 
        });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log("request done");
  };

  handleClick = event => {
    var apiBaseUrl = "https://fast-dusk-26414.herokuapp.com";
    // console.log("values",this.state.username,this.state.email,this.state.password);
    var self = this;
    var payload={
    "username": this.state.username,
    "email": this.state.email,
    "password":this.state.password
    }
    console.log(payload)
    console.log(typeof this.state.email)
    axios.post(apiBaseUrl+'/register', payload)
   .then(function (response) {
     console.log(response);
     if(response.data.code === 200){
      //  console.log("registration successfull");
       var loginscreen=[];
       loginscreen.push(<Login parentContext={this}/>);
       var loginmessage = "Not Registered yet.Go to registration";
       self.props.parentContext.setState({
        loginscreen:loginscreen,
       loginmessage:loginmessage,
       buttonLabel:"Register",
       isLogin:true
        });
     }
   })
   .catch(function (error) {
     console.log(error);
   });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  componentDidUpdate = () => {
    console.log('state-updated: ', this.state.loggedIn);
  };

  render() {
        
    return (
      <Router>
        <div>
          <Logo>
            Trivia Challenger
          </Logo>
          <Header />
          <Content>
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route path="/instructions" component={Instructions} />
              <Route path="/highscore" component={Highscore} />
              
              <Route path="/gameplay" render={(props) => (
              this.state.loggedIn ?
                (<Userprofile  {...props} component={Userprofile} loggedIn={this.state.loggedIn} username={this.state.username} singlescore={this.state.singlescore} multiplayscore={this.state.multiplayscore} currentPlayers={this.state.currentPlayers}handleInputChange={this.handleInputChange} handleClick={this.handleClick} handleSubmit={this.handleSubmit} />)
                :
                (<Gameplay {...props} 
                  loggedIn={this.state.loggedIn} username={this.state.username} password={this.state.password} email={this.state.email} handleInputChange={this.handleInputChange} handleClick={this.handleClick} handleSubmit={this.handleSubmit} />)
              )}/> 
            
            </Switch>
          </Content> 
         
        </div>
      </Router>
    );
  };
};

export default App;
