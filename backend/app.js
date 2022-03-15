const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const auth = require('./security/auth')
const usersRouter = require('./routes/usersRouter')
const recordsRouter = require('./routes/recordsRouter')
const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb://localhost:27017', {
    useNewUrlParser : true,
    useUnifiedTopology : true,
})
let db;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use(cors())

app.use(cookieParser())

app.use((req, res, next) => {
    if (!db) {
        client.connect(function (err) {
            db = client.db('MwaClinic');
            req.db = db;
            next();
        });
    }
    else {
        // req.db = db;
        next();
    }
})

app.use('/api/users', usersRouter);
app.use('/api/records', async (req, res, next) => {
    let token = req.headers['token'];
    if(!auth.isTokenValid(token)){
        return res.json({message : "User not signed in. Please singin to access this page."})
    }
    next();
})
app.use('/api/records', recordsRouter)

app.listen(3000, ()=>console.log('Listening to port 3000'))

// module.exports = app;