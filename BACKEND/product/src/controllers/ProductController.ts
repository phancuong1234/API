import {product} from "../model/product";
import {Request, Response} from "express";
import {common} from "./CommonController";

export class ProductController {
    createProduct( req: Request, res: Response) {
        let Params = [
            req.body.name,
            req.body.description,
            req.body.price,
            common.getDateTime(),
            common.getDateTime()
        ];
        return product.insertProduct(Params)
            .then(
                (result: any) => {
                    res.json(result)
                }
            ).catch(
            (err: any) => {
                res.json(err);
            }
        )
    }
    getProducts(req: Request, res: Response) {
        return product.getProducts()
            .then(
                (result: any) => {
                    res.json(result);
                }
            ).catch(
                (err: any) => {
                    res.json(err);
                }
            );
    }
    updateProduct(req: Request, res: Response) {
        let id = parseInt(req.params.id);
        let params = [
            req.body.name,
            req.body.description,
            req.body.price,
            common.getDateTime()
        ];

        return product.updateProduct(params, id).then(
            (result: any) => {
                res.json(result);
            }
        ).catch(
            (err: any) => {
                res.json(err);
            }
        )
    }
    deleteProduct(req: Request, res: Response) {
        let id = parseInt(req.params.id);

        return product.deleteProduct(id).then(
            (result: any) => {
                res.json(result);
            }
        ).catch(
            (err: any) => {
                res.json(err);
            }
        )
    }
    getDataEdit(req: Request, res: Response) {
        let id = parseInt(req.params.id);
        return product.getWithId(id).then(
            (result: any) => {
                res.json(result);
            }
        ).catch((err: any) => {
                res.json(err);
            }
        )
    }

}
