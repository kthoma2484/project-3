import React, { Component }  from "react";
import styled from 'react-emotion';

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
};

const CategoriesWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
})

class Categories extends Component {

    constructor(props) {
        super(props);
        this.state = {
          value: 'default',
        };
    };

    handleChange = event => {
        var result = event.target.value;
        console.log(result);
        console.log(typeof result.id)
        this.setState({
          value: event.target.value, 
          key: event.target.key, 
        })
        console.log("Your category is: " + event.target.value);
      };
     
    componentDidUpdate = () => {
        console.log(this.state);
    }

    render () {
        return (
            <label style={formStyle}>
                <CategoriesWrapper>
                <h4 style={formStyle}>Select Your Category!</h4>
                <select id="category" value={this.state.value} onChange={this.handleChange}>
                    <option value='default'>Choose Your Level:</option>
                    {this.props.results2.map(result => (
                        <option value={result.name} key={result.id}>
                            {result.name}
                        </option>
                    ))}
                </select>
                </CategoriesWrapper>
            </label>
        );
    }
}

export default Categories;