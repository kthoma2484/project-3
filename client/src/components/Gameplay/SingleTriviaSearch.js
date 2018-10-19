import React, { Component } from "react";
import styled from 'react-emotion';
// import Categories from "./Categories";

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
};

const SearchWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 20,
});

const buttonStyle = {
  color: 'darkblue',
  margin: 15,
};

const optionStyle = {
  color: 'black'
};

class SingleTriviaSearch extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: 'default',
  //     name: '',
  //   };
  // };

  // handleChange = event => {
  //   var result = event.target.value;
  //   console.log(result);
  //   this.setState({
  //     value: event.target.value, 
  //   })
  //   this.showCategories(result);
  // };
 
  // componentDidUpdate = () => {
  //   console.log(this.state);
  // }
  
  // showCategories= value => {
  //   if (value === 'default') {
  //     console.log("No level choosen");
  //   };
  //   if (value === 'hard') {
  //     console.log("You have choosen: " + value);
  //   };
  //   if (value === 'insanity') {
  //     console.log("You have choosen: " + value);
  //   }
  //   if (value === 'normal') {
  //     console.log("You have choosen normal - now choose categories");
  //     return  <div key="normal-category">
  //     <h4>You've choosen normal - choose your categories</h4>
  //       <Categories categories={this.props.categories} />
  //     </div>
  //   };
  // };

  render() {
    
    return (
    <div>
      <SearchWrapper column>
        <h2>Single Player Mode</h2>
        <h4>Difficulty Level</h4>
        <form>
          <label style={formStyle}>
            <h4 style={formStyle}>Select Your Difficulty</h4>
            <select style={optionStyle} id="s-level" value={this.props.level} onChange={this.props.handleChange}>
              <option style={optionStyle} value='default'>Choose Your Level:</option>
              <option style={optionStyle} value='normal'>Normal</option>
              <option style={optionStyle} value='hard'>Hard</option>
              <option style={optionStyle} value='insanity'>Insanity</option>
            </select>
          </label>
          <br/>
          {this.props.showCategories(this.props.level)}
        </form>
        <div>
        </div>
        <button style={buttonStyle} label="Create Game" onClick={(event) => this.props.handleSubmit(event)}>Create Game!</button>
      </SearchWrapper>
    </div>
    )
  }
};

export default SingleTriviaSearch;
