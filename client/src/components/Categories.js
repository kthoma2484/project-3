import React from "react";
import { DropdownButton, MenuItem } from 'react-bootstrap';

const Categories = props => {
    return (
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
    );
}

export default Categories;