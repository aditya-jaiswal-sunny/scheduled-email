import schedule from 'node-schedule';
import sendEmail from './nodeMailer.service.js';

const scheduleEmail = (body) => {

  const scheduledDate = new Date(body.scheduled_at);

  schedule.scheduleJob(scheduledDate, () => {
    console.log('Email Sending ....');
    sendEmail(body);
  });
};

export default scheduleEmail;
