const addCart = data => ({ type:'ADD_CART', payload:data });
const update_cart = data = ({ type:'UPDATE_CART',payload:data });
const bubble = () => ({ type:'BUBBLE' });
const total = () => ({ type:'TOTAL' });
const deleteItem = data => ({ type:'DELETE_ITEM',payload:data });

export { addCart,bubble,update_cart,total,deleteItem };