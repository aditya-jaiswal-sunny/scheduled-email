import express from 'express';
import cors from 'cors';
import httpStatus from 'http-status';
import router from './route/v1/index.js';
import ApiError from './utils/apiError.js';
import errorHandler from './middleware/errorHandler.js';

const app = express();

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors());
app.options('*', cors());

// v1 api routes
app.use('/v1', router);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

// handle error
app.use(errorHandler);

export default app;
