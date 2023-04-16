const path = require('path');
const router = require('express').Router();

// const todos = ['eat dinner', 'Take out trash'];

//make a GET route to send an array of todos

const todos = [

{
    id: 1,
    text: 'Get groceries'


},

{
    id:2,
    text: 'Take out trash'
},

{   id: 3,
    text: 'Another todo'
    
}

];


//Make a GET route to send array of todos

router.get('/api/todos', (client_req, server_res)  => {
server_res.send(todos);
});

// router.get('/'todos :id', (client_req, server_res)







