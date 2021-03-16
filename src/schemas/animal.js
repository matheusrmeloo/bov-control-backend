import { DatabaseSingleton } from "../core/mongo";
let db = DatabaseSingleton.getConnectMain();
class AnimalSchema{};

AnimalSchema.prototype.name = "Animal";

AnimalSchema.prototype.schema = {
    type   : { type: String, required : true },
    name   : { type: String, required : true },
    weight : { type: Number, required : true },
    age    : { type: Number, required : true }
};

AnimalSchema.prototype.model = db.model(AnimalSchema.prototype.name, new db.Schema(AnimalSchema.prototype.schema, { timestamps: true }));

export {
    AnimalSchema
}
