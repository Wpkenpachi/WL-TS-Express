import { Request, Response } from 'express';

export const index = async (req: Request, res: Response): Promise<Response> => {
  return res.send('Home!!!');
};