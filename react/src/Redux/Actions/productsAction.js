const getAllProducts = data => ({ type:'GET_PRODUCTS', payload:data});
const alfaOrder = () => ({ type:'ALPHA_ORDER' });
const lowestPrice = () => ({ type:'LOWEST_PRICE' });
const mostRecent = () => ({ type:'MOST_RECENT' });
const addedToCart = data => ({ type:'ADDED_TO_CART',payload:data });
const loading = () => ({ type:'LOADING' });

export { getAllProducts,lowestPrice,mostRecent,alfaOrder,addedToCart,loading };