import express from 'express';
import bodyParser from 'body-parser';
import {mjml2html} from 'mjml';
import config from './config';

const app = express();

app.use(bodyParser.raw({
  type: () => true
}));

app.get('/', (req, res) => {
  res.send('Use POST /compile');
});

app.post('/compile', (req, res) => {
  try {
    const responseData = mjml2html(`${req.body}`);
    res.send(responseData);

  } catch (e) {
    res.status(422).send('Invalid input');
  }
});

app.listen(config.port, () => {
  console.log('Server started at port %s', config.port);
});
