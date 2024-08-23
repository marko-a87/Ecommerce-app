//Handles errors

const errorHandler = (statusMessage, statusCode) => {
  const error = new Error();
  error.statusMessage = statusMessage;
  error.statusCode = statusCode;
  return error;
}

export default errorHandler;