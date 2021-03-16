import {createAnimalController, getAnimalsController} from "../controllers";

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
    }
];

export default animal;