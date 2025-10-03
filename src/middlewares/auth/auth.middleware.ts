import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const toten = req.headers[`authorization`];
    if (!toten) return res.status(401).json({ message: 'Unauthorized' });

    console.log(`User authenticated with token: ${toten}`);
    next();
  }
}
