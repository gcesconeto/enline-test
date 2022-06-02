const express = require('express');
const cors = require('cors');

const upload = require('./middlewares/upload');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.json());
app.use(cors({ origin: '*' }));

app.get('/coffee', (_req, res) => res.status(418).send('coffee time'));

app.get('/', require('./controllers/fileUpload'));

app.post('/upload', upload.single('file'), (req, res) => {
  res.send('file uploaded');
});

// app.use(require('./middlewares/error'));

module.exports = app;