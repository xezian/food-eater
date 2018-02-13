const orm = require("../config/orm.js");
// foodEater to export the functions we use to create and eat the food
const foodEater = {
    all: (table) => {
        orm.selectAll(table).then(data => {
            console.log(data)
        });
    },
    create: (item, table) => {
        orm.insertOne(item, table).then(data => {
            console.log(data);
        });
    },
    eat: (item, table) => {
        orm.eatOne(item, table).then(data => {
            console.log(data);
        });
    }
};
module.exports = foodEater;
