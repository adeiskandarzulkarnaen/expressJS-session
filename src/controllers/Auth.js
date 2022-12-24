/* eslint-disable consistent-return */

import bcrypt from 'bcrypt';
import User from '../models/UserModel.js';

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({
      where: {
        username,
      },
    });
    if (!user) return res.status(404).json({ message: 'Pengguna tidak ditemukan!' });

    /* bycript compate password */
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: 'Password yang dimasukan salah!' });
    }

    /* define user session */
    req.session.userId = user.username;
    res.status(200).json({
      message: 'Login Success!!!',
    });
  } catch (error) {
    res.status(400).json({ messsage: `request salah : ${error.message}` });
  }
};

const logout = async (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) return res.status(400).json({ message: 'Tidak dapat keluar!' });
      res.status(200).json({ message: 'Anda telah keluar!' });
    });
  } catch (error) {
    res.status(400).json({ message: 'request client tidak sesuai' });
  }
};

/* Mendapatkan Informasi User */
const getMe = async (req, res) => {
  try {
    if (!req.session.userId) {
      return res.status(400).json({ message: 'Mohon login terlebih dahulu!' });
    }

    const user = await User.findOne({
      attributes: ['username'],
      where: {
        username: req.session.userId,
      },
    });

    if (!user) {
      res.status(404).json({ message: 'Pengguna tidak ditemukan!' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: `terjadi kesalahan: ${error.message}` });
  }
};

export { login, logout, getMe };
