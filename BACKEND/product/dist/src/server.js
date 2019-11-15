"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("../configs/constant.json");
let flash = require('connect-flash');
let session = require('express-session');
let cookieParser = require('cookie-parser');
const methodOverride = require("method-override");
let routeApi = require('./routes/api');
const app = express();
//configure
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser('keyboard cat'));
app.use(session({ cookie: { maxAge: 60000 } }));
app.use(flash());
//override method
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        let method = req.body._method;
        delete req.body._method;
        return method;
    }
}));
// //middleware
// app.use('/api');
//set route
routeApi(app);
app.listen(config.server.PORT, function () {
    console.log(`server is running at ${config.server.PORT}`);
});
//# sourceMappingURL=server.js.map