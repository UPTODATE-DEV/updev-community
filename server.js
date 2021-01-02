import express from 'express';

// instance of express
const app = express();
// set a port
const port = process.env.PORT || 4000;

// configure the environment
app.use(express.json());

// define the routes
app.get('/', (req, res) => {
  res.send({ message: 'welcome' });
});

// config the server to listen
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server runing on http://localhost:${port}`);
});
