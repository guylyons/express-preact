import express from 'express';
import exphbs from 'express-handlebars';

const app = express();

app.use(express.static('dist'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.get('/', function (req, res) {
    res.send('gabye!')
});

app.listen(3000, function () {
  console.log('Server started');
});