const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

var corsOptions = {
    origin: 'http://localhost:8081'
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const db = require('./models')
const fillData = require('./controllers/addData')
const filterData = require('./controllers/filterData')
// const getData = require('./controllers/getData')

db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
    fillData()
});

app.set('view engine', 'pug')
app.set('views', './views');

app.use(express.static('public'))

app.get('/', async(req, res) => {
    // let users = await getData()
    // console.log(users)
    let filteredUser = await filterData()
    res.render('table', { data: { title: 'Hi', header: 'Employees', users: filteredUser } })
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});