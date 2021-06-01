const express = require('express');
const path = require('path');
const cors = require('cors');
const router = require('./routes');

const app = express();

const PORT = process.env.PORT || 3333;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static('public'));
app.use(express.json());
app.use(cors());
app.use(router);

app.listen(PORT, () => console.log(`Servidor online port ${PORT}`));
