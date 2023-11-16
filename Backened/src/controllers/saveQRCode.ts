import { Request, Response } from 'express';
import QRCodeModel from '../models/qrcode';
import UserModel from '../models/user';

import * as QRCode from 'qrcode';



export const saveqr = async (req: Request, res: Response) => {
    
  const { userId, text } = req.body 
  // console.log(text)

  try {
 
    const user = await UserModel.findById(userId);
  
    if (!user) {
     
      return res.status(404).json({ message: 'User not found' });
    }

    const qrCodeDataUrl = await QRCode.toDataURL(text);

   
    const newQRCode = new QRCodeModel({
      userId,
      text,
      data: qrCodeDataUrl,
      });

    const savedQRCode = await newQRCode.save();
    res.status(201).json(savedQRCode);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error generating and saving QR code' });
  }

};

export const loadqrcode = async (req: Request, res: Response) => {

  const {userId,text}=req.query;
 
  // const userId = req.params.userId;

  try {
    const qrCodes = await QRCodeModel.find({ userId });

    if (!qrCodes || qrCodes.length === 0) {
      return res.status(404).json({ message: 'No QR codes found for the provided user ID' });
    }

    res.status(200).json(qrCodes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error rendering QR codes' });
  }
};




export const deleteqrcode= async (req:Request, res:Response) => {
  const  qrCodeId  = req.params.qrCodeId ;
  console.log(req.params)

  try {
    const deletedQRCode = await QRCodeModel.findByIdAndRemove(qrCodeId);

    if (!deletedQRCode) {
      return res.status(404).json({ message: 'QR code not found' });
    }

    res.status(200).json({ message: 'QR code deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting QR code' });
  }
};




  


// as { userId: string; text: string };