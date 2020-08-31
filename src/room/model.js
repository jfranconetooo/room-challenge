import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const RoomsSchema = new Schema({
  name: {
    type: String,
    index: true,
    required: true
  },
  guid: {
    type: String,
    required: true
  },
  host_user: {
    type: Schema.Types.ObjectId, ref: 'users',
    required: true
  },
  participants: [{
    type: Schema.Types.ObjectId, ref: 'users' 
  }],
  capacity_limit: {
      type: Number,
      default: 5
  }
}, {
    timestamps: {
      createdAt: 'created',
      updatedAt: 'updated'
    }
});


export default mongoose.model('rooms', RoomsSchema);
