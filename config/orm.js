const connection = require("./connection.js");
// homemade orm to perform MySQL queries
const orm = {
    selectAll: (tableInput) => {
        const queryString = "SELECT * FROM " + tableInput + ";";
        return new Promise((resolve, reject) => {
            connection.query(queryString, (err, result) => {
                if (err) reject (err);
                resolve (result);
            });
        });
    },
    insertOne: function(item, table){
        const queryString = "";
        console.log("insertOne");
    },
    updateOne: function(item, table, eaten){
        const queryString = "";
        console.log("updateOne");
    }
};
module.exports = orm;