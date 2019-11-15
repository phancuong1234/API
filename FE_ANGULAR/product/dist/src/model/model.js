"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("../database/connection");
const config = require("../../configs/constant.json");
class Model {
    getList(query) {
        return new Promise(function (resolve, reject) {
            connection_1.default.query(query, function (err, results) {
                if (err) {
                    let data = {
                        "code": config.code.CODE_ERROR_NOT_FOUND,
                        "message": err
                    };
                    reject(data);
                }
                else {
                    let data = {
                        "code": config.code.CODE_SUCCESS,
                        "data": results
                    };
                    resolve(data);
                }
            });
        });
    }
    create(query, arr) {
        return new Promise(function (resolve, reject) {
            connection_1.default.query(query, arr, function (err, results) {
                if (err) {
                    let data = {
                        "code": config.code.CODE_ERROR_CREATE,
                        "message": err
                    };
                    reject(data);
                }
                else {
                    let data = {
                        "code": config.code.CODE_SUCCESS,
                        "message": "CREATE SUCCESS"
                    };
                    resolve(data);
                }
            });
        });
    }
}
exports.Model = Model;
//# sourceMappingURL=model.js.map