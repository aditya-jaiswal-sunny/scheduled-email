import Schedule from '../model/schedule.model.js';
import ApiError from '../utils/apiError.js';
import scheduleEmail from './nodeScheduler.service.js';

const createScheduleService = async (scheduleBody) => {
  try {
    const response = Schedule.create(scheduleBody);
    scheduleEmail(scheduleBody);
    return response;
  } catch (error) {
    console.error(`error occured in schedule service ${error}`);
    throw new ApiError(500,'something went wrong');
  }
};

const getSchedulesService = async () => {
  try {
    return Schedule.find();
  } catch (error) {
    console.error(`error occured in schedule service ${error}`);
    throw new ApiError(500,'something went wrong');
  }
};

const getScheduleByIdService = async (id) => {
  try {
    return Schedule.findById(id);
  } catch (error) {
    console.error(`error occured in schedule service ${error}`);
    throw new ApiError(500,'something went wrong');
  }
};

export {
  createScheduleService,
  getSchedulesService,
  getScheduleByIdService,
};
