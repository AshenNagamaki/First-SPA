import { initStore } from './store';

const configureStore = () => {
    const actions = {
        ADD_TO_CART: (curState, product) => {
            const updatedCartItems = [...curState.cartItems];
            updatedCartItems.push(product);
            const updatedTotalPrice = curState.totalPrice + product.price;
            localStorage.setItem('currentCart', JSON.stringify({ cartItems: updatedCartItems, totalPrice: updatedTotalPrice }));
            return { cartItems: updatedCartItems, totalPrice: updatedTotalPrice }
        },
        REMOVE_SINGLE_FROM_CART: (curState, product) => {
            const updatedCartItems = [...curState.cartItems];
            let updatedTotalPrice;
            for (let cartItem of updatedCartItems) {
                if (cartItem.title === product.title) {
                    updatedCartItems.splice(curState.cartItems.indexOf(cartItem), 1);
                    updatedTotalPrice = curState.totalPrice - product.price;
                    break;
                };
            };
            localStorage.setItem('currentCart', JSON.stringify({ cartItems: updatedCartItems, totalPrice: updatedTotalPrice }));
            return { cartItems: updatedCartItems, totalPrice: updatedTotalPrice}
        },
        REMOVE_ALL_FROM_CART: (curState, product) => {
            let updatedTotalPrice = curState.totalPrice;
            for (let cartItem of [...curState.cartItems]) {
                if (cartItem.title === product.title) {
                    updatedTotalPrice -= product.price;
                };
            };
            const updatedCartItems = [...curState.cartItems].filter(cartItem => cartItem.title !== product.title);
            localStorage.setItem('currentCart', JSON.stringify({ cartItems: updatedCartItems, totalPrice: updatedTotalPrice }));
            return { cartItems: updatedCartItems, totalPrice: updatedTotalPrice}
        },
        FILL_THE_CART: (curState, newState) => {
            const updatedCartItems = newState.cartItems;
            const updatedTotalPrice = newState.totalPrice;
            return { cartItems: updatedCartItems, totalPrice: updatedTotalPrice }
        },
        CLEAR_CART: curState => {
            curState.cartItems.splice(0, curState.cartItems.length);
            localStorage.clear();
            return { cartItems: curState.cartItems, totalPrice: 0 }
        }
    };
    initStore(actions, { cartItems: [], totalPrice: 0 });
};

export default configureStore;