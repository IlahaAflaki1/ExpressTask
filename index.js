const express = require("express");
const app = express();
const port = 8080;
let users = [{
        name: "Elvin",
        surname: "Aliyev",
        age: 21
    },
    {
        name: 'İlahə',
        surname: 'Əflakı',
        age: 25
    },
    {
        name: "Efsane",
        surname: "Talibova",
        age: 23
    },
    {
        name: 'Vusal',
        surname: 'Mammadli',
        age: 21
    },
    {
        name: "Ülvi",
        surname: "Aliyev",
        age: 19
    },
    {
        name: 'Aysel',
        surname: 'Məmmədova',
        age: 21
    }
]
app.get("/", (req, res) => {
    res.send("Hello world!");
});
app.get('/card', function(req, res) {
    res.send('You send request for card route!');
});
app.get('/client', function(req, res) {
    res.send('You send request for client route!');
});
app.get('/users', function(req, res) {
    res.send(
        users.map((user) => {
            return user
        })
    );
});
app.listen(port, () => {
    console.log(`server started at http://localhost:${ port }`);
});