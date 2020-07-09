const db = require('../config/database');

module.exports = {

    insert: (fullname,id,address,phoneNumber,email) => {

        db.query(`INSERT INTO users 
                (fullname, id, address, phoneNumber, email) VALUES 
                ('${fullname}', '${id}', '${address}', '${phoneNumber}', '${email}')`);

    },

    searchEmail: (email,callback) => {

        db.query(`select * from users where email = '${email}'`,function(err,result,field){
            return callback(result);
        });

    }


}