import React from 'react';
import classes from '../../../ShoppingCart.module.css'

const item = (props) => {
    debugger;
    return (
        <div className={classes.item}>
            <span>{props.item.name}</span>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" className={classes['btn-light']} onClick={() => props.increment(props.item.id)}>
                    &#10133;</button>
                <button type="button" className={classes['btn-light']}>{props.item.quantity}</button>
                <button type="button" className={classes['btn-light']} onClick={() => props.decrement(props.item.id)}> &#10134;</button>
            </div>
            <span>{props.item.price}</span>
        </div>
    )

}

export default item;