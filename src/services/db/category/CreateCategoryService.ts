import { Category } from "@entities/Category";
import { categoryRepository } from "@repositories/index";

class CreateCategoryService {
    static async execute( name : Category['name'] ): Promise<Category> {

        try {

          const category = categoryRepository.create({name});

          await category.save();

          return category;

        } catch (error) {
           return error.message
        }
   }    
}

export { CreateCategoryService };