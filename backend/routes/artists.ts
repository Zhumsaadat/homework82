import express from 'express';
import Artists from '../models/Artists';

const artistsRouter = express.Router();

artistsRouter.get('/', async (req, res, next) => {
  try {
    const artists = await Artists.find();

    res.send(artists);
  } catch (e) {
    next(e);
  }
});

artistsRouter.post("/", async (req, res, next) => {
  try {
    const artists = req.body;
    if(!artists) {
      return res.status(422).send({error: 'Field is required'})
    }

    const artistsData = {
      name: req.body.name,
      image: req.body.image,
      info: req.body.info,
    };

    const artist  = new Artists(artistsData);
    await  artist.save();

      return res.send(artist);
  }catch (e) {
    next(e);
  }
});

export default artistsRouter;