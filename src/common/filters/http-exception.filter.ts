import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';

/** Converts thrown exceptions into a stable, non-sensitive API response shape. */
@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  /** Handles an exception without exposing implementation details. */
  catch(exception: unknown, host: ArgumentsHost): void {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const request = context.getRequest<Request>();
    const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
    const payload = exception instanceof HttpException ? exception.getResponse() : { message: 'Internal server error' };
    response.status(status).json({ statusCode: status, path: request.url, timestamp: new Date().toISOString(), error: payload });
  }
}
