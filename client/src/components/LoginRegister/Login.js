import React, { Component } from 'react';
import styled from 'react-emotion';

const LoginWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
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
            <LoginWrapper column>
              <h4>
                Login
               </h4>
               <form>
                <label htmlFor="username">
                Enter your username:
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
                Enter user password:
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
                 <button label="Submit" primary={true} style={style} onClick={(event) => this.props.handleSubmit(event)}>Submit</button>
             </LoginWrapper>
        );
      }
    }
    
    const style = {
     margin: 15,
    };
    
  
export default Login