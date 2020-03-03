import React from 'react';
import classes from '../ShoppingCart.module.css';
import Items from './Items/items'
const Checkout = (props) => {
    return (

        <div className={classes.Checkout}>
            <div className="d-flex" ><h4 style={{ marginRight: '20px' }}>Checkout</h4> <span>(Total Items: {props.citems.length})</span></div>
            <Items items={props.citems} price={props.price} incrementClick={(price) => props.IncrementProduct(price)} decrementClick={(price) => props.decrementProduct(price)} />
        </div>

    )
}

export default Checkout;