import {
    createAnimalController, 
    getAnimalsController,
     getSpecificAnimalController
} from "../controllers";

const animal = [
    {
        method: 'post',
        path  : '/animal',
        route : createAnimalController
    },
    {
        method: 'get',
        path  : '/animal',
        route : getAnimalsController
    },
    {
        method: 'get',
        path  : '/animal/:id',
        route : getSpecificAnimalController
    }
];

export default animal;