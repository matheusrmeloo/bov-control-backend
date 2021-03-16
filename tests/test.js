import { mochaAsync } from './utils/index';
import chai from 'chai';
const expect = chai.expect;
const delay = require('delay');
import {methods} from "./utils/request";
const app = require("../app/index");

context('Animals', async () => {
    var serve, id;
    before( async () =>  {
        await delay(10000);
        serve       = await app.app;
    });
    after( async () =>  {
        process.exit(0);
    });
    context('Create Animal', async () => {
        it('Should Success', mochaAsync(async () => {
            const res = await methods.createAnimal(serve, {
                type: "ox",
                name:`test${(Math.floor(Math.random() * (9999 - 1000 + 1) ) + 1000)}`,
                weight: Math.floor(Math.random() * (9999 - 1000 + 1) ) + 1000,
                age: Math.floor(Math.random() * 2 ) + 2
            });
            id = res.body.message._id;
            expect(res.status).to.equal(201);
        }));
    });
    context('Get Animals', async () => {
        it('Should Success', mochaAsync(async () => {
            const res = await methods.getAnimals(serve, {
                size: 10,
                offset:0
            });
            expect(res.status).to.equal(200);
        }));
    });
    context('Get Specific Animal', async () => {
        it('Should Success', mochaAsync(async () => {
            const res = await methods.getSpecificAnimal(serve, id);
            expect(res.status).to.equal(200);
        }));
    });
    context('Patch Specific Animal', async () => {
        it('Should Success', mochaAsync(async () => {
            const res = await methods.updateAnimal(serve, {
                type: "cow",
                name:`test${(Math.floor(Math.random() * (9999 - 1000 + 1) ) + 1000)}haha`,
                weight: Math.floor(Math.random() * (9999 - 1000 + 1) ) + 1000,
                age: Math.floor(Math.random() * 2 ) + 2
            }, id);
            expect(res.status).to.equal(204);
        }));
    });
});

