import { Unit } from "@entities/Unit";
import { unitRepository } from "@repositories/index";

class UpdateUnitService {
    static async execute({ id, code }: Unit) {
     
        const updatedProduct = await unitRepository.update(
            {id},
            {code}
        );

        return updatedProduct

    }
}

export { UpdateUnitService }