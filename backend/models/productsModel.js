const db = require('../config/database');

module.exports = {

    allProducts: (offset,callback) =>{
        db.query(`select products.idProduct, 
        products.name,
        products.price,
        products.quantity,
        products.image,
        products.description,
        products.publication_date,
        GROUP_CONCAT(distinct categories.name) as 'category' 
        from products
            inner join products_by_categories on products_by_categories.idProduct = products.idProduct
            inner join categories on categories.idCategory = products_by_categories.idCategory
            group by products.idProduct limit 10 offset ${offset}`,function(err,result,field){
                return callback(result);
            });
    },

    pagination:(callback) => {
        db.query(`select count(*) as 'boxes' from products`,function(err,result,field){
            return callback(result);
        });
    }
    
}