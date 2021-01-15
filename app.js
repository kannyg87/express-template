
const express = require('express');
const app = express();
// for pass word we need to cread file cofig.js to allow as to open our database
// const pw = require("./congig.js")


const PORT = 3000

//ejs
app.set('view engine', 'ejs');

//public
app.use(express.static('public'))

//route references
app.use(require('./routes/index'))
app.use(require('./routes/aboutus'))


// how to connect the data base
// const config = {
//     host: 'localhost',
//     port: 5432,
//     database: 'employees_database',
//     user: 'postgres',
//     password :pw
// };

// let pgp = require('pg-promise')();
// let db = pgp(config);
// console.log(db);

app.listen(PORT, () => {
  
    console.log(`listening on port ${PORT}`);
})
//npm install body-parser