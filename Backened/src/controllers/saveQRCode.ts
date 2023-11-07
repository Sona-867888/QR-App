import { Request, Response } from 'express';
import QRCodeModel from '../models/qrcode';
import UserModel from '../models/user';

import * as QRCode from 'qrcode';



export const saveqr = async (req: Request, res: Response) => {
    
    const { userId, text } = req.body as { userId: string; text: string };
  
    try {
   
      const user = await UserModel.findById(userId);
    
      if (!user) {
       
        return res.status(404).json({ message: 'User not found' });
      }
  
      const qrCodeDataUrl = await QRCode.toDataURL(text);
  
     
      const newQRCode = new QRCodeModel({
        userId,
        data: qrCodeDataUrl,
        });
  
      const savedQRCode = await newQRCode.save();
      res.status(201).json(savedQRCode);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error generating and saving QR code' });
    }

  };



  


