"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../model/model");
class Product extends model_1.Model {
    insertProduct(Params) {
        let query = "INSERT INTO product(Name,Description,Price) VALUES (?,?,?)";
        return this.create(query, Params);
    }
}
exports.product = new Product();
//# sourceMappingURL=product.js.map