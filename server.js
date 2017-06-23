import express from 'express';
import favicon from 'express-favicon';

const app = express();

app.use(favicon(__dirname + '/dist/favicon.png'));
app.use(express.static('dist'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(3000, function () {
  console.log('Server started');
});
