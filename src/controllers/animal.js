import AnimalLogic from "../logics/animal";
import { responseError, responseSuccess } from "../logics/utils/ligth/response";

/**
 * @api {post} /parking
 * @apiName CreateAnimal
 * @apiGroup Animal
 *
 * @apiParam {String} plate license plate.
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
 *       "message": "Invalid Plate"
 *     }
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "message": "There is already an open reserve for this plate"
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
 * @api {get} /parking/:id/out
 * @apiName OutReservation
 * @apiGroup Reservation
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 204 OK
 *     {
 *     }
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Bad Request
 *     {
 *       "message": "Reservation not found"
 *     }
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "message": "Car can only be released after payment"
 *     }
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "message": "This reserve is already released"
 *     }
 */
const getAnimalsController = async (req, res) => {
    try {
        const animals = new AnimalLogic(req.body);
        responseSuccess((await animals.getAnimals()), res);
    } catch (err) {
        responseError(err, res);
    }
}

export {
    createAnimalController,
    getAnimalsController
}