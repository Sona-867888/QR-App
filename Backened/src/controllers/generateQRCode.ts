

import { Request, Response } from 'express';
import * as QRCode from 'qrcode';
import UserModel from '../models/user';


export const generateQRCode = async (req: Request, res: Response) => {
  const { text } = req.body as { text: string };
  
  try {
    const qrCode = await QRCode.toDataURL(text);
    res.json({ qrCode });
  } catch (error) {
    console.log(error);
    
    res.status(500).json({ message: 'Error generating QR code' });
  };
};











  








