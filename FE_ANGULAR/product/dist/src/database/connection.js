'user strict';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { configPathEnv } from "../env";
require('dotenv-flow').config();
let mysql = require('mysql');
// configPathEnv();
//local mysql db connection
console.log('HOST ' + process.env.DATABASE_HOST);
console.log('USER ' + process.env.DATABASE_USER);
console.log('PASS ' + process.env.DATABASE_PASS);
console.log('NAME ' + process.env.DATABASE_NAME);
let connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE_NAME,
    port: process.env.DATABASE_PORT
});
connection.connect(function (err) {
    if (err)
        throw err;
    // console.log(resolve(__dirname, "./../../"));
});
// module.exports = connection;
exports.default = connection;
//# sourceMappingURL=connection.js.map