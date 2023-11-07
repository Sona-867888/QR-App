import nodemailer from 'nodemailer';
import crypto from 'crypto';
import { Request, Response } from 'express';
import User from '../models/user'; 

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'kumarisonali867888@gmail.com',
    pass: 'ukgmvflbsdykffhr', 
  },
});

interface VerificationData {
  token: string;
  expires: number;
}

export const verificationTokens = new Map<string, VerificationData>();

export const generateVerificationToken = (): string => {
  return crypto.randomBytes(20).toString('hex');
};

const emailVerifiedPage = `
  <html>
    <head>
      <title>Email Verified</title>
    </head>
    <body>
      <h1>Email Verified Successfully</h1>
      <p>You can now proceed to the <a href="http://localhost:4200/login">Login/a>.</p>
    </body>
  </html>
`;

export const sendVerificationEmail = (to: string, verificationLink: string): boolean => {
  const mailOptions = {
    from: 'kumarisonali867888@gmail.com',
    to,
    subject: 'Email Verification',
    text: `Please click the following link to verify your email: ${verificationLink}`,
  };

  try {
    transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const emailverified = (req: Request, res: Response) => {

  res.send(emailVerifiedPage);
  
};

export const verify = async (req: Request, res: Response) => {
  const email = req.query.email as string;
  const token = req.query.token as string;
  const storedData = verificationTokens.get(email);

  if (storedData && storedData.token === token && Date.now()< storedData.expires) {
    verificationTokens.delete(email);

    try {
      const user = await User.findOne({ email });
      if(user) {
        // console.log(user.isEmailVerified);
        const newuser=await user.updateOne({isEmailVerified: true})
        // console.log(newuser);
      }
      
      return res.redirect('http://localhost:3000/api/email-verified');
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Server error' });
    }
  } else {
    return res.status(400).json({ message: 'Invalid verification link or link has expired' });
  }
};
