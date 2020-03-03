import React, { Component } from "react";
import Products from './Products/Products'
import Checkout from "./Checkout/checkout";
import classes from './ShoppingCart.module.css';
import { connect } from 'react-redux';
import cartActions from '../../actions/shoppingcart.actions'

class ShoppingCart extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <div className="d-flex">
                <Products items={this.props.items} clicked={(item) => this.props.addButtonHandler(item)} />
                <Checkout citems={this.props.citems} price={this.props.price} IncrementProduct={(price) => this.props.onIncrementproductHandler(price)} decrementProduct={(price) => this.props.onDecrementproductHandler(price)} />
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    debugger;
    return {
        items: state.products.items,
        citems: state.products.checkout.citems,
        price: state.products.checkout.totalprice
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addButtonHandler: (item) => dispatch(cartActions.addItem(item)),
        onIncrementproductHandler: (price) => dispatch(cartActions.incrementProduct(price)),
        onDecrementproductHandler: (price) => dispatch(cartActions.decrementProduct(price))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);