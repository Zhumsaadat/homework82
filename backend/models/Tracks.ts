import mongoose, { Types } from 'mongoose';
import Albums from './Albums';

const Schema = mongoose.Schema;

const TracksSchema = new Schema ({
  name: {
    type: String,
    required: true
  },
  duration: String,
  album: {
    type: Schema.Types.ObjectId,
    ref: 'Albums',
    required: true,
    validate: {
      validator: async (value: Types.ObjectId) => Albums.findById(value),
      message: 'Album does not exist!',
    }
  }
});

const Tracks = mongoose.model('Tracks', TracksSchema);


export default Tracks;