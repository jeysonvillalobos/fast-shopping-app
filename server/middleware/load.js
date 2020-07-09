module.exports = {

	Route:function(route){
		return require('../routes/' + route);
	},

	Model:function(model){
		return require('../models/' + model);
	}

}