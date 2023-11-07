import mongoose,{Document,Model} from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    }  , 
    isEmailVerified: {
      type: Boolean,
      default: false, 
    },

    verificationToken: {
        type: String,
      },
    verificationTokenExpiry: {
        type: Date,
      },
      
     
})

interface UserDocument extends Document {
    name: string;
    email: string;
    password: string;
    isEmailVerified: boolean;
    verified: boolean;
    verificationToken: string;
    verificationTokenExpiry: Date;
    comparePassword(candidatePassword: string): Promise<boolean>;
    
}

userSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  return candidatePassword === this.password;
};


const UserModel: Model<UserDocument> = mongoose.model<UserDocument>('User', userSchema);

export default UserModel

