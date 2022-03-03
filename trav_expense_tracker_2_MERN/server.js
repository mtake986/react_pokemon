const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('colors');

dotenv.config({ path: "./config/config.env" })

const app = express();

const transactionsRouter = require('./routes/transactions')
app.use('/transactions', transactionsRouter)


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));