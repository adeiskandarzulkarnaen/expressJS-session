/* eslint-disable consistent-return */

import dotenv from 'dotenv';
import User from '../models/UserModel.js';

dotenv.config();

const verifyUser = async (req, res, next) => {
  try {
    if (!req.session.userId) {
      return res.status(401).json({ message: 'Mohon Login terlebih dahulu!' });
    }

    const user = await User.findOne({
      where: {
        username: req.session.userId,
      },
    });

    if (!user) {
      return res.status(404).json({ message: 'Pengguna tidak ditemukan!' });
    }

    req.userId = user.username;
    // req.role = user.role;
    next();
  } catch (error) {
    res.status(500).json({
      message: 'Server tidak bisa menangani',
    });
  }
};

export default verifyUser;
