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

const optionStyle = {
    color: 'black'
};

class Categories extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       value: 'default',
    //     };
    // };

    // handleChange = event => {
    //     var result = event.target.value;
    //     console.log(result);
    //     console.log(typeof result.id)
    //     this.setState({
    //       value: event.target.value, 
    //       key: event.target.key, 
    //     })
    //     console.log("Your category is: " + event.target.value);
    // };
     
    // componentDidUpdate = () => {
    //     console.log(this.state);
    // }

    render () {
        return (
                <CategoriesWrapper>
                    <label id="normal-category">
                        <h4 style={formStyle}>You've choosen normal - Select Your Category!</h4>
                        <select id="category" value={this.props.categoryPick} onChange={this.props.handleChange}>
                            <option style={optionStyle} value='default'></option>
                            {this.props.categories.map(category => (
                                <option style={optionStyle} value={category.name} key={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </label>
                </CategoriesWrapper>
        );
    }
}

export default Categories;