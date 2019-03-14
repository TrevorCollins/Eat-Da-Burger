var orm = require("../config/orm");

var burger = {
    all: function (cb) {
        // pass the callback from the controller to the orm
        orm.selectAll(cb);
    },
    insert: function (name, cb) {
        // This works too, but you do not need to pass a new function
        // unless you need to do something with data before send it back to the controller.
        // So you just can pass the callback from the controller directly to the orm like I did on `all`
        // e.g. `orm.insertOne(name, cd) {`
        orm.insertOne(name, cb);
    },
    update: function (id, cb) {
        orm.updateOne(id, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;
