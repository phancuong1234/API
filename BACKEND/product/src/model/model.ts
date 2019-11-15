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
            });
        });
    }

    protected edit(query: string, arr: object) {
        return new Promise( function (resolve, reject) {
            connection.query(query, arr,function (err: any, results: any) {
                if (err) {
                    let data = {
                        "code" : config.code.CODE_ERROR_UPDATE,
                        "message" : err
                    };

                    reject(data);
                } else {
                    let data = {
                        "code" : config.code.CODE_SUCCESS,
                        "message" : "UPDATE SUCCESS"
                    };

                    resolve(data);
                }
            });
        });
    }

    protected delete(query: string) {
        return new Promise( function (resolve, reject) {
            connection.query(query,function (err: any, results: any) {
                if (err) {
                    let data = {
                        "code" : config.code.CODE_ERROR_UPDATE,
                        "message" : err
                    };

                    reject(data);
                } else {
                    let data = {
                        "code" : config.code.CODE_SUCCESS,
                        "message" : "DELETE SUCCESS"
                    };

                    resolve(data);
                }
            });
        });
    }

    protected getDataWithId(query: string) {
        return new Promise(function (resolve, reject) {
            connection.query(query, function (err: any, results: any) {
                if (err) {
                    let data = {
                        "code" : config.code.CODE_ERROR_NOT_FOUND,
                        "message" : err
                    };

                    reject(data);
                } else {
                    let data:any;
                    if (results.length > 0) {
                        data = {
                            "code" : config.code.CODE_SUCCESS,
                            "message" : "GET DATA SUCCESS",
                            "data" : results
                        };
                    } else {
                        data = {
                            "code" : config.code.CODE_ERROR_NOT_FOUND,
                            "message" : "DATA NOT FOUND"
                        };
                    }

                    resolve(data);
                }
            })
        })
    }
}
