import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
//request er kaj hocche frontend theke ki request ashtese oita get kora
//response hocche ekhan theke ki return dibo oita
//nextfunction hocche middlware er kaj sesh korar pore next e kaar kase pathabe oi function er kase handover kora
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`[${req.method}] - [${req.originalUrl}]`)
    next();
  }
}
