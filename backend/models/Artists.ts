import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ArtistsSchema = new Schema ({
  name: {
    type: String,
    required: true
  },
  image: String,
  info: String,
});

const Artists = mongoose.model('artists', ArtistsSchema);


export default Artists;