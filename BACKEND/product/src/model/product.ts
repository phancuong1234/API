import { Model } from "../model/model";

class Product extends Model {
    insertProduct(Params: object) {
        let query: string = "INSERT INTO product(Name,Description,Price,created_at,updated_at) VALUES (?,?,?,?,?)";

        return this.create(query, Params)
    };
    getProducts() {
        let query: string = "SELECT * FROM product";

        return this.getList(query);
    };
    updateProduct(Params: object, id: number) {
        let query: string = "UPDATE product SET Name = ?, Description = ?, Price = ?, updated_at = ? WHERE id =" + id;

        return this.edit(query, Params);
    };
    deleteProduct(id: number) {
        let query: string = "DELETE FROM product WHERE id =" + id;

        return this.delete(query);
    };
    getWithId(id: number) {
        let query: string = "SELECT * FROM product WHERE id =" + id;

        return this.getDataWithId(query);
    }
}

export const product = new Product();
