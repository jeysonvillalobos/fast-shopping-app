const countBoxes = data => ({type:'COUNT_BOX',payload:data});
const paginationOffset = data => ({ type:'PAGINATION_OFFSET',payload:data });


export { countBoxes,paginationOffset };