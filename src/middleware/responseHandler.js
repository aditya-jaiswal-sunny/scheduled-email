import httpStatus from 'http-status';

const responseHandler = (req, res) => {
  const response = {
    data: res.locals?.response || {},
    message: 'success',
    code: 'F200',
  };

  res.status(httpStatus.OK).send(response);
};

export default responseHandler;
