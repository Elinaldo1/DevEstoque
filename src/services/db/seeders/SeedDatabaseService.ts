import { SeedCreateCategoryService } from "./SeedCreateCategoriesService";
import { SeedCreateProductsService } from "./SeedCreateProductsService";
import { SeedCreateUnitsService } from "./SeedCreateUnitsService";


class SeedDatabaseService {
  static async execute() {
    try {

        const seedDatabase = async () => {
            const numberOfRecords = 5; // Você pode mudar esse valor para ajustar a quantidade de registros
          
            await SeedCreateCategoryService.execute(numberOfRecords);
            await SeedCreateUnitsService.execute();
            await SeedCreateProductsService.execute(numberOfRecords);
          
            console.log(`Database seeded with ${numberOfRecords} records in categories and products, and with valid units in the units table`);
        };
        
        await seedDatabase();

    } catch (error) {

        console.error('Error seeding database:', error);
            
    }
  }
}

export { SeedDatabaseService };
