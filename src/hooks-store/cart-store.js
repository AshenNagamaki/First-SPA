import { initStore } from './store';

const configureStore = () => {
    const actions = {
        ADD_TO_CART: (curState, product) => {
            const updatedCartItems = [...curState.cartItems];
            updatedCartItems.push(product);
            const updatedTotalPrice = curState.totalPrice + product.price;
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
            return { cartItems: updatedCartItems, totalPrice: updatedTotalPrice}
        },
        CLEAR_CART: curState => {
            curState.cartItems.splice(0, curState.cartItems.length);
            return { cartItems: curState.cartItems, totalPrice: 0 }
        }
    };
    initStore(actions, {cartItems: [], totalPrice: 0});
};

export default configureStore;