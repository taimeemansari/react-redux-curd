import React from 'react';
import Item from './item/item'
const Items = (props) => {
    debugger;
    const { items } = props
    const total = <h5>Total Price: {props.price}</h5>;
    return (
        <div>
            {items.map((item) => {
                return <Item item={item} increment={(price) => props.incrementClick(price)} decrement={(price) => props.decrementClick(price)} />
            })}
            {items.length >= 1 ? total : <p>No Items in cart</p>}
        </div>
    )
}

export default Items;