import request from 'supertest';

const methods = {
    createAnimal: (server, params) => {
        return request(server)
        .post('/api/animal')
        .send(params)
        .then(res => res)
    },
    getAnimals: (server, params) => {
        return request(server)
        .get(`/api/animal`)
        .send(params)
        .then(res => res)
    },
    getSpecificAnimal: (server, id) => {
        return request(server)
        .get(`/api/animal/${id}`)
        .then(res => res)
    },
    updateAnimal: (server, params, id) => {
        return request(server)
        .patch(`/api/animal/${id}`)
        .send(params)
        .then(res => res)
    }
};

export {
    methods
}