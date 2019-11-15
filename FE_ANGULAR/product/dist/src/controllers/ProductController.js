"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../model/product");
class ProductController {
    createProduct(req, res) {
        let Params = [
            req.body.name,
            req.body.description,
            req.body.price
        ];
        console.log(Params);
        res.end();
        return product_1.product.insertProduct(Params)
            .then((result) => {
            res.json(result);
        })
            .catch((err) => {
            res.json(err);
        });
    }
}
exports.ProductController = ProductController;
//# sourceMappingURL=ProductController.js.map