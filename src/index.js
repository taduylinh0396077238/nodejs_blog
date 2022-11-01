const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars')
const app = express();
const port = 3000;

const route = require('./routes') 


// app.use(express.urlencoded());
// app.use(express.json());

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());


//chuyền static vào img 
app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger
// app.use(morgan('combined'));

//Template engin 
app.engine('hbs', handlebars.engine(
  {extname: '.hbs'}
));
app.set('view engine', 'hbs');

//Test đường dẫn thì console.log(path.join(__dirname, 'resources/views')) xem đã chuẩn đường dẫn hay chưa 
app.set('views', path.join(__dirname, 'resources/views'));

//Routes init 
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});