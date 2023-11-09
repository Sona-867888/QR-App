import mongoose, { Document, Model, Schema} from 'mongoose';
import QRCode from 'qrcode'; 

const qrcodeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true,
  },
  text: {
    type: String, // Store the text associated with the QR code
    required: true,
  },
  data: {
    type: String,
    required: true,
  },  
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

interface QRCodeDocument extends Document {
  userId: mongoose.Schema.Types.ObjectId;
  text: string;
  data: string;
  createdDate: Date;
}

const QRCodeModel: Model<QRCodeDocument> = mongoose.model<QRCodeDocument>('QRCode', qrcodeSchema);

export default QRCodeModel;