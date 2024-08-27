import { Category } from "@entities/Category";
import { categoryRepository } from "@repositories/index";

class ListCategoriesService {
    static async execute(): Promise<Category[]> {
            
            const categories = await categoryRepository.find();
    
            return categories;
    }

}

export { ListCategoriesService };
