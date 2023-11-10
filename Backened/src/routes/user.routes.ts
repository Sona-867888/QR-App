import express from 'express';

import { logout } from '../controllers/logout';
import { generateQRCode} from '../controllers/generateQRCode';
import { registerUser } from '../controllers/register';
import { loginUser } from '../controllers/login';
import {  emailverified, verify } from '../controllers/email';
import { saveqr } from '../controllers/saveQRCode';
import {loadqrcode,editqrcode,deleteqrcode} from '../controllers/saveQRCode'



const router = express.Router();


router.post('/register', registerUser);


router.post('/login', loginUser);


router.get('/verify', verify);

router.post('/saveqrcode', saveqr); 

router.get('/email-verified', emailverified);


router.post('/logout', logout);


router.post('/qrcode', generateQRCode);

router.get('/qrcodelist', loadqrcode);

router.put('/editqrcode/:qrCodeId', editqrcode)

router.delete('/deleteqrcode/:qrCodeId',deleteqrcode)




// router.post('/userprofile',profilepic );





export default router;
