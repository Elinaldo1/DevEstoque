import { CreateUnitService } from "../unit/CreateUnitService";

class SeedCreateUnitsService {

    static async execute() {

        const units = ['kg', 'g', 'L', 'ml', 'cm', 'm'];

        for (const code of units) {
            await CreateUnitService.execute(code);
        }

    }
    
}

export { SeedCreateUnitsService };

