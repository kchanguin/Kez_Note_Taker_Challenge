
const express = require ('express');
//const api_routes = require('./routes/api_routes');
const PORT = process.env.PORT || 3000;
const mysql = require('mysql2');

const app = express();




const connection = mysql.createConnection({
   user: 'root',
   password: '',
   database: 'turtle_db'
   //
   
   //host: 'localhost' 
});

//connection.query('SELECT * FROM turtles', (err, turtlesArr) => {
//if (err) throw err;

//server_res.send('turtlesArr');
//});


app.get('/api/turtles', (client_req, server_res) => {

server_res.send('turtlesArr');
});

app.listen(PORT, () => console.log('Server running on %s', PORT));








// const path = require('path');
// const view_routes = require('')
// const PORT = process.env.PORT || 3000;



// const app = express();

// app.use(express.static('public'));


// app.listen(PORT, ()=> console.log('Listening on port %s',
// PORT));


// const app = express();

// console.log(PORT);
// console.log(process.env.TITLE);

