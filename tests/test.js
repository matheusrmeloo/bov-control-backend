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

            expect(res.body.message._id).not.equal(null);
            expect(res.body.message).not.equal(null);
            expect(res.body.message._id).not.equal(undefined);
            expect(res.body.message).not.equal(undefined);
            expect(res.body.message._id).to.be.an('string');
            expect(res.status).to.equal(201);
        }));
        it('Should Return Error - Missing Params', mochaAsync(async () => {
            const res = await methods.createAnimal(serve, {
                type: "ox",
                name:`test${(Math.floor(Math.random() * (9999 - 1000 + 1) ) + 1000)}`,
                age: Math.floor(Math.random() * 2 ) + 2
            });

            expect(res.body.message).not.equal(null);
            expect(res.body.message).not.equal(undefined);
            expect(res.body.message).to.be.an('string');
            expect(res.body.message).to.equal("One or more parameters missing. Please check documentation.");
            expect(res.status).to.equal(400);
        }));
        it('Should Return Error - Invalid Age', mochaAsync(async () => {
            const res = await methods.createAnimal(serve, {
                type: "ox",
                name:`test${(Math.floor(Math.random() * (9999 - 1000 + 1) ) + 1000)}`,
                weight: Math.floor(Math.random() * (9999 - 1000 + 1) ) + 1000,
                age: `Math.floor(Math.random() * 2 ) + 2`
            });

            expect(res.body.message).not.equal(null);
            expect(res.body.message).not.equal(undefined);
            expect(res.body.message).to.be.an('string');
            expect(res.body.message).to.equal("Invalid or undefined age.");
            expect(res.status).to.equal(400);
        }));
    });
    context('Get Animals', async () => {
        it('Should Success', mochaAsync(async () => {
            const res = await methods.getAnimals(serve, {
                size: 10,
                offset:0
            });
            expect(res.body.message).not.equal(null);
            expect(res.body.message).not.equal(undefined);
            expect(res.body.message.animals).to.be.an('array');
            expect(res.body.message.totalCount).to.be.an('number');
            expect(res.status).to.equal(200);
        }));
    });
    context('Get Specific Animal', async () => {
        it('Should Success', mochaAsync(async () => {
            const res = await methods.getSpecificAnimal(serve, id);

            expect(res.body.message).not.equal(null);
            expect(res.body.message).not.equal(undefined);
            expect(res.body.message).to.be.an('object');
            expect(res.body.message._id).to.be.an('string');
            expect(res.body.message.type).to.be.an('string');
            expect(res.body.message.name).to.be.an('string');
            expect(res.body.message.weight).to.be.an('number');
            expect(res.body.message.age).to.be.an('number');
            expect(res.body.message.createdAt).to.be.an('string');
            expect(res.body.message.updatedAt).to.be.an('string');
            expect(res.status).to.equal(200);
        }));
        it('Should Return Error - Animal Not Found', mochaAsync(async () => {
            const res = await methods.getSpecificAnimal(serve, "614fb5bf96ddec132272b81f");
            expect(res.body.message).not.equal(null);
            expect(res.body.message).not.equal(undefined);
            expect(res.body.message).to.be.an('string');
            expect(res.body.message).to.equal("Animal not found in the database, try to pass a valid ID.");
            expect(res.status).to.equal(400);
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
        it('Should Return Error - Animal Not Found', mochaAsync(async () => {
            const res = await methods.updateAnimal(serve,{
                type: "cow",
                name:`test${(Math.floor(Math.random() * (9999 - 1000 + 1) ) + 1000)}haha`,
                weight: Math.floor(Math.random() * (9999 - 1000 + 1) ) + 1000,
                age: Math.floor(Math.random() * 2 ) + 2
            }, "614fb5bf96ddec132272b81f");
            expect(res.body.message).not.equal(null);
            expect(res.body.message).not.equal(undefined);
            expect(res.body.message).to.be.an('string');
            expect(res.body.message).to.equal("Animal not found in the database, try to pass a valid ID.");
            expect(res.status).to.equal(400);
        }));
    });
});

