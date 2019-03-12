var connection = require("../config/connection");

// TODO: (bonus)
// orm should be model agnostic... the table, fields and data should be
// passed by your model, so it can be share between models.

var orm = {
    // I added the callback passed from the controller
    selectAll: function (cb) {
        var query = "SELECT * FROM burgers";
        connection.query(query, function (err, result) {
            if (err) { throw err; }

            // pass the result set back to the controller via callback
            cb(result);
        });
    },

    // TODO:
    // add the callback from your controller to the function signature
    // function (name, cb)
    insertOne: function (name) {
        // BONUS: Use ES6 string template (note the back-tick) and use ${var_name} to interpolate the variable
        // let query = `INSERT INTO burgers (burger_name) VALUES ('${name}')`

        var query = "INSERT INTO burgers (burger_name)";
        query += " VALUES ('" + name + "');";


        connection.query(query, function (err, result) {
            if (err) { throw err; }

            // TODO: use the callback here to pass the result set back to the controller
        });
    },

    // TODO:
    // add the callback from your controller to the function signature
    // function (id, cb)
    updateOne: function (id) {
        // BONUS: use ES6 string template

        var query = "UPDATE burgers ";
        query += "SET devoured = true ";
        query += "WHERE id = " + id + ";";

        connection.query(query, function (err, result) {
            if (err) { throw err; }

            // TODO: use the callback here to pass the result set back to the controller
        });
    }
};

module.exports = orm;
