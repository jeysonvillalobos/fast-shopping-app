var initialState = {
    products:[],
    total:0,
    bubble:0
};

const cart = (state = initialState,action) => {

    switch (action.type) {
        case 'ADD_CART':
            return { 
                    ...state,
                     products:[...state.products,action.payload],
                     total: state.total += action.payload.price
                }
        case 'BUBBLE':
            return { ...state,bubble:state.products.length };
        
        case 'UPDATE_CART':

            let newState = state.products.map(data => {
                if(data.id === action.payload.productId){
                    return {
                        ...data,
                        priceQty:action.payload.price,
                        localQTY:action.payload.localQTY
                    }
                }
                else{
                    return data;
                }
            });

            return { ...state,products:newState};

        case 'DELETE_ITEM':
            let itemDeleted = state.products.filter(data => data.id !== action.payload);
            
            return {
                ...state,
                products:itemDeleted
            };


        case 'TOTAL':
            let total = state.products.map(data => {
                if(data.priceQty > 2)
                {
                    return data.priceQty;
                }
                else{
                    return data.price
                }
            });

            if(total.length > 0)
            {
                return { ...state,total:total.reduce((a,b)=>(Number(a)+Number(b))) };
            }
            else{
                return { ...state,total:0 };
            }
        
        case 'CLEAR_ALL':
            return { products:[], total:0,bubble:0 }
        default:
            return state;
    }
};

export { cart };