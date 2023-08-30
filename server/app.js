const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const todoRouter = require('./routes/todo');
app.use('/api', todoRouter); // 기본주소: localhost:PORT/api

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
