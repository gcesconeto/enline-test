const express = require('express');
const cors = require('cors');

const upload = require('./middlewares/upload');
const error = require('./middlewares/error');

const controllers = require('./controllers');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use('/uploads', express.static('uploads'));
app.use('/public', express.static('public'));
app.use(express.json());
app.use(cors({ origin: '*' }));

app.get('/coffee', (_req, res) => res.status(418).send('coffee time'));

app.get('/', controllers.fileForm);

app.post('/upload', upload.array('file'), controllers.fileUploaded);

app.get('/wipe', controllers.DBWipe);

app.use(error);

module.exports = app;