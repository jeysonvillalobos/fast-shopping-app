const paginationBoxes = (state = 0,action) => {
    switch (action.type) {
        case 'COUNT_BOX':
                return action.payload;
        default:
            return state;
    }

}

const paginationCurrent = (state = 0,action) => {
    switch (action.type) {
        case 'PAGINATION_OFFSET':
            return action.payload;
        default:
            return state;
    }

} 

export { paginationBoxes,paginationCurrent };