import { Category } from "@entities/Category";
import { categoryRepository } from "@repositories/index";

class DeleteCategoryService {
    static async execute(category: Category) {
        try {

            await categoryRepository.remove(category);

            return 'Unit deleted successfully';

        } catch (error) {
            return error.message;
        }
    }
}

export { DeleteCategoryService };
