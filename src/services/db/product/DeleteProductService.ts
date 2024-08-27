import { Product } from "@entities/Product";
import { productRepository } from "@repositories/index";

class DeleteProductService {
    static async execute(product: Product) {
        try {
            // const product = await productRepository.find({where: { id }});

            // if (!product) {
            //     throw new Error('Product not found');
            // }

            await productRepository.remove(product);

            return 'Product deleted successfully';

        } catch (error) {
            return error.message;
        }
    }
}

export { DeleteProductService };