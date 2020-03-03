import { access, stat } from "fs";
import { get } from "https";

const initialState = {
    items: [
        {
            id: 1,
            name: 'Fruit Bowl',
            price: 50,
            pic: ''
        },
        {
            id: 2,
            name: 'Lime Juice',
            price: 30,
            pic: ''
        },
        {
            id: 3,
            name: 'Cookies (No.10)',
            price: 50,
            pic: ''
        },
        {
            id: 4,
            name: 'Ice Cream',
            price: 80,
            pic: ''
        }
    ],
    checkout: {
        citems: [],
        totalprice: 0
    }
}

const reducer = (state = initialState, actions) => {
    switch (actions.type) {
        case "ADD_ITEM":
            debugger;
            let checkid = state.checkout.citems.every(citem => citem.id !== actions.data.id)
            const quan = { quantity: 1 }
            const data = { ...actions.data, ...quan }
            if (checkid) {
                return {
                    ...state,
                    checkout: {
                        ...state.checkout,
                        citems: state.checkout.citems.concat(data),
                        totalprice: state.checkout.totalprice
                    }

                }
            } else {
                alert('item alreay added')
            }
            break;
        case "SUM_TOTAL":
            debugger;
            return {
                ...state,
                checkout: {
                    ...state.checkout,
                    totalprice: state.checkout.citems.reduce((acc, curr) => acc + curr.price, 0)
                }
            }
            break;
        case "INCREMENT":
            debugger;
            const basePrice = state.items.filter(x => x.id === actions.data)[0].price;
            const updateItems = state.checkout.citems.map(citem => {
                debugger;
                if (citem.id === actions.data) {
                    return {
                        ...citem,
                        price: citem.price + basePrice,
                        quantity: citem.quantity + 1

                    }
                } else {
                    return citem;
                }
            });
            const newPrice = state.checkout.citems.reduce((acc, curr) => acc + curr.price, 0)

            return {
                ...state,
                checkout: {
                    ...state.checkout,
                    citems: updateItems,
                    totalprice: newPrice
                }
            }
            break;
        case "DECREMENT":
            const basePrice1 = state.items.filter(x => x.id === actions.data)[0].price;
            const updateItems1 = state.checkout.citems.map(citem => {
                if (citem.quantity < 1) {
                    alert('Action not possible! Please add items');
                    return citem;
                } else {
                    debugger;
                    if (citem.id === actions.data) {
                        return {
                            ...citem,
                            price: citem.price - basePrice1,
                            quantity: citem.quantity - 1

                        }
                    } else {
                        return citem;
                    }
                }
            });
            const newPrice1 = state.checkout.citems.reduce((acc, curr) => acc + curr.price, 0)

            return {
                ...state,
                checkout: {
                    ...state.checkout,
                    citems: updateItems1,
                    totalprice: newPrice1
                }
            }
            break;

        default:
            return state
    }
    return state;
}
export default reducer;