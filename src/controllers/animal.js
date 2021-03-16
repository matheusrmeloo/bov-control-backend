import AnimalLogic from "../logics/animal";
import { responseError, responseSuccess } from "../logics/utils/ligth/response";

/**
 * @api {post} /animal
 * @apiName CreateAnimal
 * @apiGroup Animal
 *
 * @apiParam {String} type Type of animal.
 * @apiParam {String} name Animal name.
 * @apiParam {Number} weight Animal weight.
 * @apiParam {Number} age Animal age in months.
 *
 * @apiSuccess {String} _id uid Animal.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "_id": "0x2343r7Tv23eD343"
 *     }
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "message": "One or more parameters missing. Please check documentation."
 *     }
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "message": "Invalid or undefined age."
 *     }
 */
const createAnimalController = async (req, res) => {
    try {
        const animal = new AnimalLogic(req.body);
        responseSuccess((await animal.createAnimal()), res);
    } catch (err) {
        responseError(err, res);
    }
}

/**
 * @api {get} /animal
 * @apiName getAnimals
 * @apiGroup Animal
 *
 * @apiParam {Number} size Animal weight.
 * @apiParam {Number} offset Animal age in months.
 * 
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": {
 *          "animals": [
 *              {
 *                "_id": "604fb0bf96ddec102272b85f",
 *                "type": "ox",
 *                "name": "test",
 *                "weight": 1000,
 *                "age": 6,
 *                "createdAt": "2021-03-15T19:08:47.405Z",
 *                "updatedAt": "2021-03-15T19:08:47.405Z",
 *                "__v": 0
 *              }
 *          ],
 *          "totalCount": 1
 *       }
 *     }
 *
 */
const getAnimalsController = async (req, res) => {
    try {
        const animals = new AnimalLogic(req.body);
        responseSuccess((await animals.getAnimals()), res);
    } catch (err) {
        responseError(err, res);
    }
}

/**
 * @api {get} /animal/:id
 * @apiName getSpecificAnimal
 * @apiGroup Animal
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": {
 *         "_id": "604fb0bf96ddec102272b85f",
 *         "type": "ox",
 *         "name": "test",
 *         "weight": 1000,
 *         "age": 6,
 *         "createdAt": "2021-03-15T19:08:47.405Z",
 *         "updatedAt": "2021-03-15T19:08:47.405Z",
 *         "__v": 0
 *       }
 *     }
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "message": "Animal not found in the database, try to pass a valid ID."
 *     }
 *
 */
 const getSpecificAnimalController = async (req, res) => {
    try {
        const animal = new AnimalLogic({id: req.params.id});
        responseSuccess((await animal.getAnimalById()), res);
    } catch (err) {
        responseError(err, res);
    }
}

export {
    createAnimalController,
    getAnimalsController,
    getSpecificAnimalController
}