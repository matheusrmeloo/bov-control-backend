import Logic from "./logic";
import { AnimalRepository } from "../repos/animal";
import { throwError } from "./utils/error/errorManager";
require('dotenv').config();

export default class AnimalLogic extends Logic {
    constructor(params) {
        super(params, {
            db: AnimalRepository,
            child: []
        });
        this.params = params;
    }
    async createAnimal() {
        try {
            let { type, name, weight, age } = this.params;

            if (!type || !name || !weight || !age) { throwError("MISSING_PARAMETERS") };
            if (typeof age != 'number') { throwError("INVALID_AGE") };

            const responseSave = await this.save({
                type,
                name,
                weight,
                age
            });

            return { data: { _id: responseSave._id }, code: 201 };

        } catch (err) {
            throw err;
        }
    }
    async getAnimals() {
        try {
            let { size, offset } = this.params;
            const responseAnimals = await AnimalRepository.findAll({ size, offset });
            return { data: responseAnimals, code: 200 };
        } catch (err) {
            throw err;
        }
    }
    async getAnimalById() {
        try {
            let { id } = this.params;
            const responseAnimal = await AnimalRepository.findById({ id });
            if (!responseAnimal) { throwError("ANIMAL_NOT_FOUND") };
            return { data: responseAnimal, code: 200 };
        } catch (err) {
            throw err;
        }
    }
    async updateAnimalById() {
        try {
            let { id, type, name, weight, age } = this.params;
            const responseAnimal = await AnimalRepository.findById({ id });
            if (!responseAnimal) { throwError("ANIMAL_NOT_FOUND") };
            await AnimalRepository.findByIdAndUpdate({ 
                id,
                type: !type ? responseAnimal.type : type,
                name: !name ? responseAnimal.name : name,
                weight: !weight ? responseAnimal.weight : weight,
                age: !age ? responseAnimal.age : age
            });
            return { data: {}, code: 204 };
        } catch (err) {
            throw err;
        }
    }
}