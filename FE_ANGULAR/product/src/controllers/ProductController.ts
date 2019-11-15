import {product} from "../model/product";
import {Request, Response} from "express";

export class ProductController {

    createProduct( req: Request, res: Response) {
        let Params = [
            req.body.name,
            req.body.description,
            req.body.price
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
}
