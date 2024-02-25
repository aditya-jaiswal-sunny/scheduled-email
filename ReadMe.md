# Sample app to send scheduled email

this is using gmail to send email using nodemailer

# ENV

PORT=3001
MONGODB_URL=mongodb://127.0.0.1:27017/emailSchedule
USERNAME=your-email
PASSWORD=your-password
FROM_EMAIL=your-email

# request body to create schedule

{
    "to_email":"test@gmail.com",
    "subject": "test email",
    "text": "sample text",
    "scheduled_at": "2024-02-25T11:32:33Z"
}

# database schema

{
  "_id": {
    "$oid": "65db008c9c5ec5a33bb51ee5"
  },
  "to_email": "test@gmail.com",
  "subject": "test email",
  "text": "sample text",
  "scheduled_at": {
    "$date": "2024-02-27T07:48:10.000Z"
  },
  "created_at": {
    "$date": "2024-02-25T08:55:40.620Z"
  },
  "__v": 0
}