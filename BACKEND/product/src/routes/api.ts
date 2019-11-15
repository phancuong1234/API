import {ProductController} from "../controllers/ProductController";
import {ProductRequest} from "../validators/ProductRequest";

let productController = new ProductController();
let productRequest = new ProductRequest();

module.exports = function (app: any): void {
    app.route('/api/product/add').post(productRequest.validateInsertorUpdateProduct, productController.createProduct);
    app.route('/api/product/list').get(productController.getProducts);
    app.route('/api/product/edit/:id').get(productController.getDataEdit);
    app.route('/api/product/edit/:id').patch(productRequest.validateInsertorUpdateProduct, productController.updateProduct);
    app.route('/api/product/delete/:id').delete(productController.deleteProduct);
};
