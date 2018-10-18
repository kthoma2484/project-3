import React, { Component } from 'react';
import styled from 'react-emotion';
import RegLoginScreen from "../components/LoginRegister/RegLoginScreen";


// injectTapEventPlugin();

const GamePlayWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
});


class Gameplay extends Component {

    constructor(props){
        super(props);
        this.state={
          loginPage:[],
          uploadScreen:[]
        }
    };

    render() {
        return (
            <GamePlayWrapper>
                <div>
                    {/* {this.state.loginPage} */}
                    <RegLoginScreen username={this.props.username} password={this.props.password} email={this.props.email} handleInputChange={this.props.handleInputChange} handleClick={this.props.handleClick} handleSubmit={this.props.handleSubmit} />
                </div>
          </GamePlayWrapper>
        );
    };
};
  
export default Gameplay