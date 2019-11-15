import { Model } from "../model/model";

class Product extends Model {
    insertProduct(Params: object) {
        let query: string = "INSERT INTO product(Name,Description,Price) VALUES (?,?,?)";

        return this.create(query, Params)
    };
    getProducts() {
        let query: string = "SELECT * FROM product";

        return this.getList(query);
    };
}

export const product = new Product();
