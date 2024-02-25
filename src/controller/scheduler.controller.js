import httpStatus from 'http-status';
import {
  createScheduleService,
  getScheduleByIdService,
  getSchedulesService,
} from '../service/schedule.service.js';
import ApiError from '../utils/apiError.js';

const createScheduleController = async (req, res, next) => {
  try {
    const response = await createScheduleService(req.body);
    res.locals.response = response;
    next();
  } catch (error) {
    console.log(`error occurred in schedule controller ${error}`);
    next(error);
  }
};

const getSchedulesController = async (req, res, next) => {
  try {
    const response = await getSchedulesService();
    res.locals.response = response;
    next();
  } catch (error) {
    console.log(`error occurred in schedule controller ${error}`);
    next(error);
  }
};

const getScheduleByIdController = async (req, res, next) => {
  try {
    const response = await getScheduleByIdService(req.params.scheduledId);
    if (!response) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Schedule not found');
    }
    res.locals.response = response;
    next();
  } catch (error) {
    console.log(`error occurred in schedule controller ${error}`);
    next(error);
  }
};

export {
  createScheduleController,
  getSchedulesController,
  getScheduleByIdController,
};
