import mongoose from 'mongoose';

const scheduleSchema = mongoose.Schema(
  {
    to_email: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    scheduled_at: {
      type: Date,
      required: true,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
    updated_at: {
      type: Date,
    },
  },
);

/**
 * @typedef Schedule
 */
const Schedule = mongoose.model('emailSchedules', scheduleSchema);

export default Schedule;
