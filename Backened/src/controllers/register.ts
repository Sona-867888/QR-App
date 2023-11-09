import { Request, Response } from 'express';
import User from '../models/user'; 
import { sendVerificationEmail, verificationTokens, generateVerificationToken } from './email'; 
// import * as bcrypt from 'bcrypt';


export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body; 
 
    const existingUser = await User.findOne({ email });


    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    // const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ name, email, password }); 

    await newUser.save();

    const verificationToken = generateVerificationToken();
    const expirationTime = Date.now() + 6 * 60 * 60 * 1000;
    verificationTokens.set(email, { token: verificationToken, expires: expirationTime });
    const verificationLink = `http://localhost:3000/api/verify?email=${encodeURIComponent(email)}&token=${verificationToken}`;

    if (!sendVerificationEmail(email, verificationLink)) {
      return res.status(500).json({ message: 'Email could not be sent.' });
    }

    res.json({
      message: 'Registration success. Please check your email for a verification link.',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
