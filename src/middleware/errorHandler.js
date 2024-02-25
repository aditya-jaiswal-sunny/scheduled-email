const errorHandler = (err, req, res, next) => {
  const { statusCode, message } = err;
  res.locals.errorMessage = err.message;

  const response = {
    code: statusCode,
    message,
    ...{ stack: err.stack },
  };

  console.log("res",response);

  res.status(statusCode).send(response);
};

export default errorHandler;
