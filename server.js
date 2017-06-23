import express from 'express';
import favicon from 'express-favicon';

const app = express();

app.use(favicon(__dirname + '/public/favicon.png'));
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(3000, function () {
  console.log('Server started');
});
