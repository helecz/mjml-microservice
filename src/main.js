import express from 'express';
import bodyParser from 'body-parser';
import {mjml2html} from 'mjml';

const app = express();

app.use(bodyParser.raw({
  type: () => true
}));

app.get('/', (req, res) => {
  res.send('Use POST /compile');
});

app.post('/compile', (req, res) => {
  res.send(mjml2html(`${req.body}`));
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
