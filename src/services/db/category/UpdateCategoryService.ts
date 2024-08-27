import { Category } from "@entities/Category";
import { categoryRepository } from "@repositories/index";

class UpdateCategoryService {
    static async execute({ id, name }: Category) {
     
        const updatedCategory = await categoryRepository.update(
            {id},
            {name}
        );

        return updatedCategory

    }
}

export { UpdateCategoryService };