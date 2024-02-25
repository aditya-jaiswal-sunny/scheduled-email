import dotenv from 'dotenv';

// this helps in loading env file to process.env
dotenv.config();

const config = {
  port: process.env.PORT,
  mongoDbUrl: process.env.MONGODB_URL,
  mongoDbOptions: {
    dbName: 'emailSchedule',
  },
  email: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    from_email: process.env.FROM_EMAIL,
  },
};

export default config;
