import React from 'react';
import classes from '../../ShoppingCart.module.css';

const Product = (props) => {
    return (
        <div className={classes.Product} key={props.item.id}>
            <p>{props.item.name}</p>
            <p>{props.item.price}</p>
            <button onClick={() => props.addClicked(props.item)}>Add</button>
        </div>
    )
}

export default Product;