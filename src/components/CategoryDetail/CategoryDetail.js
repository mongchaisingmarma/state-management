import React from 'react';
import { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetail = (props) => {
    const {name} = props.product;
    return (
        <div>
            <h4>This is your Category details</h4>
            <h6>Select Product : {name}</h6>
        </div>
    );
};

export default CategoryDetail;