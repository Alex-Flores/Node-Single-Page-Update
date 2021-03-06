require('dotenv').config();
const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.use(expressLayouts);

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'))

app.use('/', require('./router'));

app.use('/', (req, res, next)=>{
    res.status(404).send('Not Found');
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})