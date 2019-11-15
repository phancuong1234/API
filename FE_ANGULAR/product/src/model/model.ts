import connection from "../database/connection";
import * as config from "../../configs/constant.json"

export class Model {
    protected getList(query: string) {
        return new Promise( function (resolve, reject) {
            connection.query(query, function (err: any, results: any) {
                if (err) {
                    let data = {
                        "code" : config.code.CODE_ERROR_NOT_FOUND,
                        "message" : err
                    };
                    reject(data);
                } else {
                    let data = {
                        "code" : config.code.CODE_SUCCESS,
                        "data" : results
                    };

                    resolve(data);
                }
            });
        });
    }

    protected create(query: string, arr: object) {
        return new Promise( function (resolve, reject) {
            connection.query(query, arr,function (err: any, results: any) {
                if (err) {
                    let data = {
                        "code" : config.code.CODE_ERROR_CREATE,
                        "message" : err
                    };

                    reject(data);
                } else {
                    let data = {
                        "code" : config.code.CODE_SUCCESS,
                        "message" : "CREATE SUCCESS"
                    };

                    resolve(data);
                }
            })
        })
    }
}
