// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const getUsersRouter = require('./routes/getUsers');
const addUserRouter = require('./routes/addUser');
const editUserRouter = require('./routes/editUser');
const deleteUserRouter = require('./routes/deleteUser');
const User = require('./models/User');

dotenv.config({ path: './config/.env' });

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const cors = require('cors');
app.use(cors());


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(express.json());

app.use('/users', getUsersRouter);
app.use('/users', addUserRouter);
app.use('/users', editUserRouter);
app.use('/users', deleteUserRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
