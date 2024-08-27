import { Unit } from "@entities/Unit";
import { unitRepository } from "@repositories/index";

class DeleteUnitService {
    static async execute(unit: Unit) {
        try {
            // const unit = await unitRepository.find({where: { id }});

            // if (!unit) {
            //     throw new Error('Unit not found');
            // }

            await unitRepository.remove(unit);

            return 'Unit deleted successfully';

        } catch (error) {
            return error.message;
        }
    }
}

export { DeleteUnitService };