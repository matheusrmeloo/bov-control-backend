import {Mongoose} from 'mongoose';
require('dotenv').config();
const mongoConnectionString = process.env.MONGO_URL;

class database {
    async start() {
        this.connectMain = new Mongoose();
        this.connectMain.set('useFindAndModify', false);
        await this.connectMain.connect(`${mongoConnectionString}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        return true;
    }
    getConnectMain() {
        return this.connectMain;
    }
}

const DatabaseSingleton = new database();

export {
    DatabaseSingleton
}