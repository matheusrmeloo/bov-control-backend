import { mochaAsync } from './utils/index';
import chai from 'chai';
const expect = chai.expect;
const delay = require('delay');
import {methods} from "./utils/request";
const app = require("../app/index");

context('Animal', async () => {
    var serve;
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
            console.log("res:: ",res.body)
            expect(res.status).to.equal(201);
        }));
    });
});

