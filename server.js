import express from 'express';
import exphbs from 'express-handlebars';
import favicon from 'express-favicon';

const app = express();

app.use(favicon(__dirname + '/dist/favicon.png'));
app.use(express.static('dist'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home')
});

app.listen(3000, function () {
  console.log('Server started');
});
