import { AnimalSchema } from "../schemas/animal";
import Repository from "./repository";


class Animal extends Repository {

    constructor() {
        super(AnimalSchema);
    }

    findAll() {
        return new Promise((resolve, reject) => {
            AnimalSchema.prototype.model
            .find()
            .exec((err, item) => {
                if (err) { reject(err) }
                resolve(item);
            });
        });
    }
}
const AnimalRepository = new Animal();

export {
    AnimalRepository
}