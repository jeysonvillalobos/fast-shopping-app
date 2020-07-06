module.exports = {

	Route:function(route){
		return require('../api/routes/' + route);
	},

	Model:function(model){
		return require('../api/models/' + model);
	}

}