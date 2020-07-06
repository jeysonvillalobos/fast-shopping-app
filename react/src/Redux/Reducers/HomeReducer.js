let initialState = {
    products:[],
    loading:false
};

const HomeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
            if(action.payload.length === 0)
            {
                return {...state,products:action.payload,loading:true};
            }
            else{
                return {...state,products:action.payload,loading:false};
            }
                
        default:
            return state;
    }

}

export default HomeReducer