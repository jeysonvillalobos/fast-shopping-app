const db = require('../config/database');

module.exports = {

    insert: (fullname,id,address,phoneNumber,email,products,callback) => {

        db.query(`select id,email from users where email = '${email}'`,function(err,result,field){
            
            if(result.length == 0)
            {
                db.query(`INSERT INTO users (fullname, id, address, phoneNumber, email) VALUES ('${fullname}', '${id}', '${address}', '${phoneNumber}', '${email}')`,function(err,rel,field){
                    for(let item of products)
                    {
                        db.query(`INSERT INTO purchases (iduser, idproduct) VALUES (${rel.insertId}, ${item})`);
                    }
                });        
                return callback({status:true,msg:''});
            }
            else{
                return callback({status:false,msg:'The email already exists in the database'});
            }

        });   

    },

    searchEmail: (email,callback) => {
        db.query(`select distinct 
        users.iduser,users.fullname,users.id,users.address,users.phoneNumber,users.email
        from users inner join purchases on purchases.iduser = users.iduser where users.email = '${email}'`,function(err,result,field){
            return callback(result);
        });
    },

    insertUserByEmail: (email,products,callback) => {
        db.query(`select iduser from users where email = '${email}'`,function(err,result,field){
            for(let item of products)
            {
                db.query(`INSERT INTO purchases (iduser, idproduct) VALUES (${result[0].iduser}, ${item})`);
            }
        });
    }

}