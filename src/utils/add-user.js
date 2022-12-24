/* eslint-disable no-unused-vars */

import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import Users from '../models/UserModel.js';

dotenv.config();

/* =================[ Default-Account admin ]================================ */

const adminUser = {
  username: 'azulredhat',
  password: await bcrypt.hash('123456', 12),
};

const InsetDataToTable = async (table, value) => {
  try {
    await table.sync();
    await table.create(value);
    console.log(`Account default "${value.username}" telah dibuat....`);
  } catch (error) {
    console.log(`Terjadi kesalahan : ${error.message}`);
  }
};
setTimeout(() => {
  console.log('Data Sync has been created successfully');
  console.log('Tekan [ CTRL + C ] untuk keluar');
}, 1900);

InsetDataToTable(Users, adminUser);
