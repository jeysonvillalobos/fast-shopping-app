var initialState = {
    products:[],
    loading:false,
    sortBy:'Alpha Order'
};

const products = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
            // if(action.payload.length === 0)
            // {
            //     return {...state,products:action.payload,loading:true};
            // }
            // else{
            //     return {...state,products:action.payload,loading:false};
            // }
            // let payload = action.payload.map(data => ({...data,addedToCart:false}));
            return {...state,products:action.payload,loading:false};
        case 'ALPHA_ORDER':
            let alpha = state.products.sort((a, b) => a.idProduct - b.idProduct);
            return { ...state,products:alpha,sortBy:'Alpha Order' };

        case 'LOWEST_PRICE':
            let lowest = state.products.sort((a, b) => a.price - b.price);
            return { ...state,products:lowest,sortBy:'Lowest Price'  };
        
        case 'MOST_RECENT':

            let recent = state.products.sort((a, b) => {
                a = new Date(a.publication_date);
                b = new Date(b.publication_date);
                return a > b ? -1 : a < b ? 1 : 0;
            });

            return { ...state,products:recent,sortBy:'Most Recent' };

        case 'ADDED_TO_CART':
            let newProducts =  state.products.map(data => {
                if(data.idProduct === action.payload)
                {
                    return {
                        ...data,
                        addedToCart:true
                    }
                }
                else{
                    return data;
                }
            });

            return { ...state,products:newProducts };

        default:    
            return state;
    }
}

export { products };