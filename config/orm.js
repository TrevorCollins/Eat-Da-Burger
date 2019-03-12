var connection = require("../config/connection");

var orm = {
    selectAll: function (cb) {
        var query = "SELECT * FROM burgers";
        connection.query(query, function (err, result) {
            if (err) { throw err; }
            cb(result);
        });
    },
    insertOne: function (name) {
        var query = "INSERT INTO burgers (burger_name)";
        query += " VALUES (" + name + ");";

        connection.query(query, function (err, result) {
            if (err) {
                throw err;
            }
        });
    },
    updateOne: function (id) {
        var query = "UPDATE burgers ";
        query += "SET devoured = true ";
        query += "WHERE id = " + id + ";";

        connection.query(query, function (err, result) {
            if (err) {
                throw err;
            }
        });
    }
};

module.exports = orm;
