const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars')
const app = express();
const port = 3000;

//chuyền static vào img 
app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger
app.use(morgan('combined'));

//Template engin 
app.engine('hbs', handlebars.engine(
  {extname: '.hbs'}
));
app.set('view engine', 'hbs');

//Test đường dẫn thì console.log(path.join(__dirname, 'resources/views')) xem đã chuẩn đường dẫn hay chưa 
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
     res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});

app.get('/search', (req, res) => {
  res.render('search');
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});