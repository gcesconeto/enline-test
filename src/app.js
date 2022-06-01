const express = require('express');
const cors = require('cors');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.json());
app.use(cors({ origin: '*' }));

app.get('/coffee', (_req, res) => res.status(418).send('coffee time'));
app.get('/', require('./controllers/fileUpload'));

// app.use(require('./middlewares/error'));

module.exports = app;