var connection = require("../config/connection.js");

var orm = {
	all: function(tableInput, cb){
		var queryString = "SELECT * FROM " + tableInput + ";";
	    connection.query(queryString, function(err, result) {
	      	if (err) {
	        	throw err;
			}
			cb(result);
	    });
	 },
	create: function(tableInput, name, condition, cb){
		var queryString = "UPDATE " + tableInput;
		
			queryString =+ " SET "
			queryString =+ name;
			queryString =+ " WHERE "
			queryString =+ condition;
			console.log(queryString);
		connection.query(queryString, function(err, result){
			if(err){
				throw err;
			}
			cb(result);
		});

	},
	delete: function(table, connection, cb){
		var queryString = "DELETE FROM " + table + "WHERE" + connection;
		connection.query(queryString, function(err, result) {
		if (err) {
			throw err;
		}

			cb(result);
		});
	}

}
module.exports = orm;