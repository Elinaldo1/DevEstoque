import { Product } from "@entities/Product";
import { ProductRequest } from "@interfaces/product/ProductRequest";
import { productRepository } from "@repositories/index";


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
