import { Product } from "@entities/Product";
import { productRepository } from "@repositories/index";
import { ProductRequest } from "src/interfaces/product/ProductRequest";


class CreateProductServive {
    static async execute(data: ProductRequest): Promise<Product> {

        try {

             const product = productRepository.create({
                 ...data,
                 created_at: Date.now(),
                 updated_at: Date.now(),

             });

          await product.save();

          return product;

        } catch (error) {
           return error.message
        }
   }    
}

export { CreateProductServive };
