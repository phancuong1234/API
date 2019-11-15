"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProductController_1 = require("../controllers/ProductController");
let productController = new ProductController_1.ProductController();
module.exports = function (app) {
    app.route('/api/product/add').post(productController.createProduct);
};
//# sourceMappingURL=api.js.map