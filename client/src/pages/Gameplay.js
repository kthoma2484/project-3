import React, { Component } from 'react';
import styled from 'react-emotion';
import RegLoginScreen from "../components/LoginRegister/RegLoginScreen";

const GamePlayWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'justify',
    fontSize: '18',
    margin: "0 auto",
    maxWidth: "800px",
});

const divStyle = {
    margin: '20px',
    overflow: 'auto',
    height: '600px'
};

class Gameplay extends Component {
    render() {
        return (
            <div style={divStyle}>
                <GamePlayWrapper column>
                    <RegLoginScreen username={this.props.username} password={this.props.password} email={this.props.email} handleInputChange={this.props.handleInputChange} handleClick={this.props.handleClick} handleSubmit={this.props.handleSubmit} />
                </GamePlayWrapper>
            </div>
        );
    };
};
  
export default Gameplay;