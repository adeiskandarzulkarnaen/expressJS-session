/* eslint-disable import/no-unresolved */

import express from 'express';
import { getBroadcast, createBroadcast } from '../controllers/Broadcast.js';
import verifyUser from '../middlewares/AuthUser.js';

const router = express.Router();

router.get('/broadcast', verifyUser, getBroadcast);
router.post('/broadcast', verifyUser, createBroadcast);

export default router;
