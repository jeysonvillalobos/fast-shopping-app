const getAllProducts = data => ({ type:'GET_PRODUCTS', payload:data});
const alfaOrder = () => ({ type:'ALPHA_ORDER' });
const lowestPrice = () => ({ type:'LOWEST_PRICE' });
const mostRecent = () => ({ type:'MOST_RECENT' });
const addedToCart = data => ({ type:'ADDED_TO_CART',payload:data });

export { getAllProducts,lowestPrice,mostRecent,alfaOrder,addedToCart };