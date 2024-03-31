class ApiError extends Error {
    constructor(statusCode, message, isOperational = true, stack = '') {
      super(message);
      const sc = message.statusCode ? message.statusCode : statusCode;
      this.statusCode = sc || 500;
      this.isOperational = isOperational;
      this.apierrmsg = message;
      if (stack) {
        this.stack = stack;
      } else {
        Error.captureStackTrace(this, this.constructor);
      }
    }
  }
  
  export default ApiError;
  