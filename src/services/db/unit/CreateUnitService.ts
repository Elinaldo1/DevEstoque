import { Unit } from "@entities/Unit";
import { unitRepository } from "@repositories/index";

class CreateUnitService {
    static async execute( code : Unit['code']): Promise<Unit> {

        try {

          const unit = unitRepository.create({ code });

          await unit.save();

          return unit;

        } catch (error) {
           return error.message
        }
   }    
}

export { CreateUnitService };