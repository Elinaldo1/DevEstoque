import { CreateCategoryService } from "../category/CreateCategoryService";

class SeedCreateCategoryService {
    static async execute (count: number){

            for (let i = 1; i <= count; i++) {
              await CreateCategoryService.execute(`Categoria - ${i}`);
            }
        
    }
}

export { SeedCreateCategoryService };