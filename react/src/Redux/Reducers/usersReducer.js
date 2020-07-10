var initialState = {
    users:[],
    status:null,
    msg:'',
    found:false
};

const users = (state = initialState,action) => {

    switch (action.type) {
        case 'INSERT_USER':
            return { ...state, status:action.payload.status,msg:action.payload.msg };
        case 'STATUS_FALSE':
            return {...state,status:null,msg:''}
        case 'SEARCH_USER':
            return { ...state,users:action.payload.users,found:action.payload.found };
        case 'CLEAR_SEARCH':
            return {...state,users:[],found:false};
        default:
            return state;
    }

};

export { users };