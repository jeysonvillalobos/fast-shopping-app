const insertUser = data => ({ type:'INSERT_USER', payload:data});
const statusToFalse = () => ({ type:'STATUS_FALSE' });
const searchUser = data => ({ type:'SEARCH_USER',payload:data });
const clearSearch = () => ({ type:'CLEAR_SEARCH' });

export { insertUser,statusToFalse,searchUser,clearSearch };