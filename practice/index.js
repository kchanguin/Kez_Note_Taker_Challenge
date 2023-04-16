const express = require ('express');

const path = require ('path')
const PORT = 3000;

const dir = path.join(process.cwd());

console.log(dir);

const app = express();

app.use(express.static ('public_files'))


//to call a router
app.get

console.log('dir');

const app = express();

app.get ('/' (client))