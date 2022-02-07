/* custom error handler */
import { ValidationError } from 'express-json-validator-middleware';

const errorHandler = (error, req, res, next) => {
  if (error instanceof ValidationError) {
    // Handle the error
    res.status(400).send(error.validationErrors.body[0]);
    next();
  }
  res.status(error.status || 500);
  res.json({
    message: error.message,
  });
  next(error);
};

export default errorHandler;
