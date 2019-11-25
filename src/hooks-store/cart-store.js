import { initStore } from './store';

const configureStore = () => {
    const actions = {
        ADD_TO_CART: (curState, product) => {
            curState.cartItems.push(product);
            return { cartItems: curState.cartItems }
        },
        REMOVE_FROM_CART: (curState, product) => {
            
            return { cartItems: curState.updatedCartItems }
        },
        CLEAR_CART: curState => {
            curState.cartItems = [];
            return { cartItems: curState.updatedCartItems}
        }
    };
    initStore(actions, {cartItems: []});
};

export default configureStore; 