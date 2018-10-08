import React, { Component } from 'react';
// import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import styled from 'react-emotion';
// import Game from "../components/Game";
import LoginScreen from "../components/LoginRegister/LoginScreen";


// injectTapEventPlugin();

const GamePlayWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
})


class Gameplay extends Component {

    constructor(props){
        super(props);
        this.state={
          loginPage:[],
          uploadScreen:[]
        }
    }

    componentWillMount(){
        var loginPage =[];
        loginPage.push(<LoginScreen parentContext={this}/>);
        this.setState({
            loginPage:loginPage
            })
    }

    render() {
        return (
            <GamePlayWrapper>
                <div className="App">
                    {this.state.loginPage}
                    {this.state.uploadScreen}
                </div>
          </GamePlayWrapper>
        );
    }
}
  
export default Gameplay