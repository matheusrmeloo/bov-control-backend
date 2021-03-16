import {
    createAnimalController,
    getAnimalsController,
    getSpecificAnimalController,
    updateAnimalController
} from "../controllers";

const animal = [
    {
        method: 'post',
        path: '/animal',
        route: createAnimalController
    },
    {
        method: 'get',
        path: '/animal',
        route: getAnimalsController
    },
    {
        method: 'get',
        path: '/animal/:id',
        route: getSpecificAnimalController
    },
    {
        method: 'patch',
        path: '/animal/:id',
        route: updateAnimalController
    }
];

export default animal;