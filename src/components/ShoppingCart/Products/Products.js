import React from 'react';
import Product from './Product/Product';
import classes from '../ShoppingCart.module.css';

const Products = (props) => {
    return (
        <div className={classes.ProductContainer}>
            {props.items.map(item => <Product item={item} key={item.id} addClicked={(item) => props.clicked(item)} />)}
        </div>
    )
}
export default Products;