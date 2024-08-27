import { Unit } from "@entities/Unit";
import { unitRepository } from "@repositories/index";

class ListUnitsService {
    static async execute(): Promise<Unit[]> {
            
            const units = await unitRepository.find();
    
            return units;
    }

}

export { ListUnitsService };