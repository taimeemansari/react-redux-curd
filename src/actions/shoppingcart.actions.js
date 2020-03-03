
const cartActions = {
    addItem,
    incrementProduct,
    decrementProduct,
    calculateTotal
}

function addItem(item) {
    return dispatch => {
        dispatch(addItemToCheckout(item))
        dispatch(calculateTotal())
    }
}

function incrementProduct(price) {
    return dispatch => {
        dispatch(incrementItem(price))
        dispatch(calculateTotal())
    }
}

function decrementProduct(price) {
    return dispatch => {
        dispatch(decrementItem(price))
        dispatch(calculateTotal())

    }
}
export function addItemToCheckout(item) {
    return {
        type: 'ADD_ITEM',
        data: item
    }
}
export function calculateTotal(item) {
    return {
        type: 'SUM_TOTAL',
        data: item
    }
}
export function incrementItem(price) {
    return {
        type: 'INCREMENT',
        data: price
    }
}
export function decrementItem(price) {
    return {
        type: 'DECREMENT',
        data: price
    }
}
export default cartActions;