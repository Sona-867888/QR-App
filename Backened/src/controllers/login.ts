import { Request, Response } from 'express';
import User from '../models/user'; 

import * as jwt from 'jsonwebtoken';

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user || !user.comparePassword(password)) {
      return res.json({
        message: 'Invalid email or password',
      });
      
    }
    
    if (!user.isEmailVerified) {
      return res.status(401).json({
        message: 'Email not verified. Please check your email for verification instructions.',
      });
    }

   
    const qrCodePageUrl = 'qrcode'; 

    
    res.json({
       qrCodePageUrl,
       user
    });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
