import mongoose from 'mongoose';
import config from './config.js';

// to connect to mongoDb
const connectMongoDb = new Promise((resolve, reject) => {
  mongoose.connect(config.mongoDbUrl, config.mongoDbOptions).then(() => {
    console.log('mongoDb connected');
    resolve();
  }).catch((error) => {
    console.error(`error connecting mongoDb ${error}`);
    reject(error);
  });
});

export default connectMongoDb;
