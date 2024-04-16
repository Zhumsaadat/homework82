import express from "express";
import cors from "cors";
import artistsRouter from './routes/artists';
import mongoose from 'mongoose';
import config from './config';
import albumsRouter from './routes/albums';

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

app.use('/artists', artistsRouter);
app.use('/albums', albumsRouter);

const run = async () => {
  await mongoose.connect(config.mongoose.db);

  app.listen(port, () => {
    console.log(`Port: ${port}`);
  });

  process.on('exit', () => {
    mongoose.disconnect();
  });
};

void run();

