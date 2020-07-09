var initialState = {
    products:[],
    total:0,
    bubble:0
};

const cart = (state = initialState,action) => {

    switch (action.type) {
        case 'ADD_CART':
            return { ...state, products:[...state.products,action.payload] }
        case 'BUBBLE':
            return { ...state,bubble:state.products.length };
        default:
            return state;
    }
};

export { cart };