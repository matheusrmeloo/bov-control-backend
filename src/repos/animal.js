import { AnimalSchema } from "../schemas/animal";
import Repository from "./repository";


class Animal extends Repository {

    constructor() {
        super(AnimalSchema);
    }

    findAll({size, offset}) {
        return new Promise((resolve, reject) => {
            AnimalSchema.prototype.model
            .find()
            .skip(offset == undefined ? 0 : offset)
            .limit((size > 10 || !size || size <= 0) ? 10 : size)
            .lean()
            .exec(async (err, item) => {
                const count = await AnimalSchema.prototype.model.find().countDocuments().exec()
                if (err) { reject(err) }
                resolve({animals: item, totalCount: count});
            });
        });
    }

    findById({id}) {
        return new Promise((resolve, reject) => {
            AnimalSchema.prototype.model
            .findById({
                _id: id
            })
            .lean()
            .exec(async (err, item) => {
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