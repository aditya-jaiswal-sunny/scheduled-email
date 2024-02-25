import nodemailer from 'nodemailer';
import config from '../config/config.js';

const sendEmail = (body) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.email.username,
      pass: config.email.password,

    },
  });

  const mailOptions = {
    from: config.email.from_email,
    to: body.to_email,
    subject: body?.subject || 'Test Subject',
    text: body?.text || 'Hello, this is a test email!',
    html: '<p>Hello, this is a test email!</p>',
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

export default sendEmail;
