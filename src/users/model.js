import mongoose from 'mongoose';
import Bcrypt from "bcryptjs";
const Schema = mongoose.Schema;


const UsersSchema = new Schema({
  username: {
    type: String,
    index: true,
    required: true
  },
  password: {
    type: String,
    select: false,
    required: true
  },
  mobile_token: {
    type: String
  }
}, {
    timestamps: {
      createdAt: 'created',
      updatedAt: 'updated'
    }
});


UsersSchema.pre("save", function(next) {
  if(!this.isModified("password")) {
      return next();
  }
  this.password = Bcrypt.hashSync(this.password, 10);
  next();
});

export default mongoose.model('users', UsersSchema);
