import { Product } from "@entities/Product";
import { productRepository } from "@repositories/index";

class ListProductsService {
    static async execute(): Promise<Product[]> {

        const products = await productRepository.find({
            relations: {
                category: true,
                unit: true,
            }
        });

        return products;
    }

}

export { ListProductsService };