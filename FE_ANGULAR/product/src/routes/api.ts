import {ProductController} from "../controllers/ProductController";
import {ProductRequest} from "../validators/ProductRequest";

let productController = new ProductController();
let productRequest = new ProductRequest();

module.exports = function (app: any): void {
    app.route('/api/product/add').post(productRequest.validateInsertProduct, productController.createProduct);
    app.route('/api/products').get(productController.getProducts);
};
