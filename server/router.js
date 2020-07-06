const express = require("express");
const router = express.Router();
const load = require('./middleware/load');

/*--------- Products ---------*/
router.use('/products',load.Route('products'));


/*--------- Users ---------*/
router.use('/users',load.Route('users'));


module.exports = router;