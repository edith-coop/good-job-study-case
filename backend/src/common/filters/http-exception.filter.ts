import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    let statusHttpCode = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal server error';

    if (exception instanceof HttpException) {
      statusHttpCode = exception.getStatus();
      const exceptionResponse = exception.getResponse();

      if (typeof exceptionResponse === 'string') {
        message = exceptionResponse;
      } else {
        const exceptionBody = exceptionResponse as {
          message?: string | string[];
        };

        if (Array.isArray(exceptionBody.message)) {
          message = exceptionBody.message.join(', ');
        } else if (typeof exceptionBody.message === 'string') {
          message = exceptionBody.message;
        } else {
          message = exception.message;
        }
      }
    }

    response.status(statusHttpCode).json({
      data: null,
      message,
      code: -1,
      statusHttpCode,
    });
  }
}
