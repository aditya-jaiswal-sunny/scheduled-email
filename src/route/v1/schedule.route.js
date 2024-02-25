import express from 'express';
import {
  createScheduleController,
  getScheduleByIdController,
  getSchedulesController,
} from '../../controller/scheduler.controller.js';
import responseHandler from '../../middleware/responseHandler.js';

const router = express.Router();

router
  .route('/')
  .post(createScheduleController, responseHandler)
  .get(getSchedulesController, responseHandler);

router
  .route('/:scheduledId')
  .get(getScheduleByIdController, responseHandler);

export default router;
