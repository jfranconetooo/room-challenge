import pkg from 'mongodb-memory-server';
const { MongoMemoryServer } = pkg;
import mongoose from 'mongoose';
import log4js from 'log4js';

const log = log4js.getLogger('database')
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);


let mongoUri;
async function connectMongo () {
  const mongoServer = new MongoMemoryServer();
  mongoUri = process.env.MONGO_URI || await mongoServer.getUri();
  mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}

connectMongo();

mongoose.connection.on('connected', () => {
    log.info(`Mongoose connection open to ${mongoUri}`);
});

mongoose.connection.on('error', () => {
    log.error(`Mongoose connection error: ${mongoUri}`);
});

mongoose.connection.on('disconnected', () => {
    log.error('Mongoose connection disconnected');
});

export default mongoose;
