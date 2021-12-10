const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require("dotenv");
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const cookieParser = require('cookie-parser');

const app = express()
dotenv.config();
app.use(cookieParser());

app.use(cors())
app.use(express.json())

const dbURI = process.env.MONGO_DB_URI;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(8080), console.log('app connected'))
  .catch((err) => console.log(err));

  app.get('/', (req, res) => res.send('this is home'));
  app.use(authRoutes);
  app.use(productRoutes);
  app.use(paymentRoutes);