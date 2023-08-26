const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const knex = require('knex')

//knex implementation here for postgres
const postgres = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        port: 5432,
        user: 'postgres',
        password: 'owais#17',
        database: 'TaskManager',
    }
});


// just checking if we are connect to postgres or not
//   postgres.select('*').from('user')
//   .then(data => {
//     console.log("Data from 'user' table:", data);
//   })
//   .catch(error => {
//     console.error("Error fetching data:", error);
//   });

const app = express();

//middlewares here
app.use(cors());
app.use(bodyParser.json())


//routes here
app.get('/', (req, res) => {
    console.log("hello world ");
    res.send('Home Page')
})

app.post('/signin', (req, res) => {
    const { email, password } = req.body;

    postgres.select('email', 'password')
        .from('user')
        .where('email', email)
        .first()
        .then((user) => {
            if (user && user.password === password) {
                res.json("success");
            } else {
                res.status(401).json("error logging in");
            }
        })
        .catch(error => {
            console.error("Error during sign-in:", error);
            res.status(500).json("Error during sign-in");
        });
});

app.post('/signup', (req, res) => {
    const { email, password } = req.body;
    postgres.select('email').from('user').where('email', email).first()
        .then(user => {
            if (!user) {
                postgres('user').insert({
                    email: email,
                    password: password
                }).then(() => {
                    res.json("success"); // Send the response after the insert operation is completed
                })
                .catch(error => {
                    console.error("Error inserting user:", error);
                    res.status(500).json("Error creating user");
                });
            } else {
                // Send a response indicating that the email is already in use
                res.status(409).json("Email already in use");
            }
        })
        .catch(error => {
            console.error("Error checking existing user:", error);
            res.status(500).json("Error checking existing user");
        });
});

app.post('/addtask', (req, res) => {
    const {task} = req.body;
    console.log("new task is ", task)
    postgres('tasks').insert({task : task}).then(() => {  
        res.json("success");
    });
})

app.delete('/delete', (req, res) => {
    const {id} = req.body;
    console.log("id is ", id);
    postgres('tasks').where('id', id).del().then(() => {
        res.json("success");
    });
});


app.listen(3001, () => {
    console.log('port working on server 3001');
})