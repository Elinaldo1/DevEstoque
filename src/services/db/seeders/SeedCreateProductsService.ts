import { ListCategoriesService } from "../category/ListCategoryService";
import { CreateProductServive } from "../product/CreateProductService";
import { ListUnitsService } from "../unit/ListUnitsService";

class SeedCreateProductsService {
    static async execute(count: number) {
    
        const categories = await ListCategoriesService.execute();
        const units = await ListUnitsService.execute();
        
        
        for (let i = 1; i <= count; i++) {
        
          const unit = units[i % units.length];
          const category = categories[i % categories.length];
        
          await CreateProductServive.execute({
            name: `Product ${i}`,
            quantity: Math.floor(Math.random() * 100) + 1,
            category: category,
            unit: unit,
            description: `Description for Product ${i}`,
          });
        }
    }
}

export { SeedCreateProductsService };