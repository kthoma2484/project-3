import React from "react";
import styled from 'react-emotion';
import { DropdownButton, MenuItem } from 'react-bootstrap';

const CategoriesWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  })

const Categories = props => {
    return (
        <div>
        <CategoriesWrapper>
            <DropdownButton
            title="Select Your Category!"
            key="category"
            id="category"
                >
                {props.results.map(result => (
                    <MenuItem eventKey={result.id} key={result.id}>
                    {result.name}
                    </MenuItem>
                ))}
            </DropdownButton>
        </CategoriesWrapper>
        </div>
    );
}

export default Categories;