import { Product } from "@entities/Product";
import { productRepository } from "@repositories/index";

class UpdateProductService {
    static async execute(id: Product['id'], data: Product) {
     
        const updatedProduct = await productRepository.update(
            {id},
            data
        );

        return updatedProduct

    }
}

export { UpdateProductService };