const connection = require("./connection.js");
// homemade orm to perform MySQL queries
const orm = {
    selectAll: (tableInput) => {
        const queryString = "SELECT * FROM " + tableInput + ";";
        return new Promise((resolve, reject) => {
            connection.query(queryString, (err, result) => {
                if (err) reject (err);
                resolve (result);
            })
        })
    },
    insertOne: (item, table) => {
        const queryString = "INSERT INTO " + table + " (food_name, eaten) VALUES (" + item + ", false);";
        return new Promise((resolve, reject) => {
            connection.query(queryString, (err, result) => {
                if (err) reject (err);
                resolve (result);
            })
        })
    },
    eatOne: (item, table) => {
        const queryString = "UPDATE " + table + " SET " + "eaten=true WHERE " + "food_name=" + item + ";";
        return new Promise((resolve, reject) => {
            connection.query(queryString, (err, result) => {
                if (err) reject (err);
                resolve (result);
            })
        })
    }
};
module.exports = orm;