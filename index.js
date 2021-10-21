const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello from my first node server');
});

const users = [
    { id: 0, name: "Sakis", email: "sakib@gmail.com", phone: "017347567" },
    { id: 1, name: "Tammi", email: "tamim@gmail.com", phone: "017347567" },
    { id: 2, name: "Muscid", email: "musfiq@gmail.com", phone: "017347567" },
    { id: 3, name: "Mahout", email: "mahmudullah@gmail.com", phone: "017347567" },
    { id: 4, name: "Rubel", email: "rubel@gmail.com", phone: "017347567" }
]

app.get('/users', (req, res) => {
    // use query parameter
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }
});

// app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

// dynamic API
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
});

app.get('/fruits', (req, res) => {
    res.send(['Mango', 'Apple', 'Banana', 'Orange']);
});

app.get('/fruits/mango/fozli', (req, res) => {
    res.send('Yummy yummy mango fozli');
})

app.listen(port, () => {
    console.log('Listening to port', port);
})