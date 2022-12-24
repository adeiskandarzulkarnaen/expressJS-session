import { nanoid } from 'nanoid';
import Broadcast from '../models/BroadcastModel.js';

const createBroadcast = async (req, res) => {
  try {
    const { title, content } = req.body;
    await Broadcast.create({
      broadcast_id: `notif-${nanoid(12)}`,
      title,
      content,
      username: req.userId,
    });
    res.status(201).json({ message: 'Notifikasi Berhasil ditambahkan' });
  } catch (error) {
    res.status(500).json({
      message: `${error}`,
    });
  }
};

const getBroadcast = async (req, res) => {
  try {
    const response = await Broadcast.findAll({
      attributes: ['broadcast_id', 'title', 'content', 'createdAt'],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: `${error}` });
  }
};

export { getBroadcast, createBroadcast };
