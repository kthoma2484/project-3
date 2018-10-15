import React, { Component } from 'react';
// import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import styled from 'react-emotion';
// import Game from "../components/Game";
import RegLoginScreen from "../components/LoginRegister/RegLoginScreen";


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
        loginPage.push(<RegLoginScreen key={Date.now()} parentContext={this}/>);
        this.setState({
            loginPage:loginPage
            })
    }

    render() {
        return (
            <GamePlayWrapper>
                <div className="App">
                    {this.state.loginPage}
                </div>
          </GamePlayWrapper>
        );
    }
}
  
export default Gameplay