import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/userRouter.js';

// read environment
dotenv.config();

// instance of express
const app = express();
// set a port
const port = process.env.PORT;

// configure the environment
app.use(express.json());

// database connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// define the routes
app.get('/', (req, res) => {
  res.send({ message: 'welcome' });
});

// use our routes
app.use('/user', userRoute);

// config the server to listen
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server runing on http://localhost:${port}`);
});
