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

    render () {
        return (
            <CategoriesWrapper>
                <label>
                    <h4 style={formStyle}>You've choosen normal - Select Your Category!</h4>
                    <select style={optionStyle} id="category" key="category" value={this.props.categoryPick} onChange={this.props.handleChange}>
                        <option style={optionStyle} value='default' key='default1'>Choose Your Category:</option>
                        {this.props.categories.map(category => (
                            <option style={optionStyle} value={category.id} key={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </label>
            </CategoriesWrapper>
        )
    }
};

export default Categories;