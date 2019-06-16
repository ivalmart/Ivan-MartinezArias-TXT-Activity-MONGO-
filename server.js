var MongoClient = require('mongodb').MongoClient;
var express = require('express');

const uri = "mongodb+srv://dev:g00gle13@rob-uueip.mongodb.net/test?retryWrites=true";

let db;

MongoClient.connect(uri, { useNewUrlParser: true}, (err, client) => {
    if (err) {
        throw err;
    }

    console.log('Successfully connected to MongoDB Server!');

    db = client.db('MongoDB Activity');
})
var userInput = db.getUser();
var userName = db.getUser();
var nextInput = db.getUser();

var userInputID = db.getUser();

app.post('/addBlog' , (req, res) => {
    db.collection('blogs').insertOne({
        title: userInput,
        author: userName,
        content: nextInput
    },  (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    })
})

app.get('/getBlog', (req, res) => {
    db.collection('blogs').findOne({
        title: userInput,
    },  (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    })
})

app.get(userInputID, (req, res) => {
    db.collection('blogs').findOne({
        title: userInput,
    },  (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    })
})

var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Connected to port: ', port);
})