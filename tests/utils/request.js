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
    payReservation: (server, params, id) => {
        return request(server)
        .patch(`/api/parking/${id}/pay`)
        .send(params)
        .then(res => res)
    },
    historicReservationPerPlate: (server, params, plate) => {
        return request(server)
        .get(`/api/parking/${plate}`)
        .send(params)
        .then(res => res)
    }
};

export {
    methods
}