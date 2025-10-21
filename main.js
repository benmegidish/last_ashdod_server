const express = require('express');
const cors = require('cors');
const usersRouter = require('./routers/usersRouter');
const app = express();
app.use(express.json());
app.use(cors());


app.use("/api/users", usersRouter);


module.exports = app;