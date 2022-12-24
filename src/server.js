/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
// const { nanoid } = require('nanoid');

import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import session from 'express-session';
import SequelizeStore from 'connect-session-sequelize';
import db from './configs/database.js';

/* router */
import AuthRoute from './routes/AuthRouter.js';
import BroadcastRouter from './routes/BroadcastRouter.js';

dotenv.config();

const app = express();

const SessionStore = SequelizeStore(session.Store);
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  store: new SessionStore({ db }),
  cookie: {
    secure: 'auto',
    maxAge: 21600000, // Six-hour: 1000 * 60 * 60 * 6
  },
}));

app.use(cors({
  credentials: true,
  origin: ['*'],
}));
app.use(express.json());

/** router */
app.use(AuthRoute);
app.use(BroadcastRouter);

// db.sync({ force: true })
db.sync({ alter: true })
  .then(() => console.log('All models were synchronized successfully.'))
  .catch((error) => console.log(error));

app.listen(process.env.APP_PORT, () => {
  console.log(`Server up and running on ${process.env.APP_PORT}`);
});
