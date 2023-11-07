
import { Request, Response } from 'express';

export const logout= (req: Request, res: Response) => {
  
    res.clearCookie('jwtToken');
    res.json({ message: 'Logout success' });
  };
  