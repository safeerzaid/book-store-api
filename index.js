const express = require('express');
const connectDB = require('./database/db');
const app = express()
require('dotenv').config()

connectDB();

app.use(express.json())

const bookRouter = require('./router/book.router')
app.use('/api', bookRouter)

app.get('/', (req,res) => {
  res.send('Api running')
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

