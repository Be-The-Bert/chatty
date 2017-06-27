const bodPars = require('body-parser');
const express = require('express');

var app = express();
app.use(express.static('assets'));
app.use(bodPars.json());

var messages = [];

app.get('/messages', function(req, res, next) {
    res.status(200).json({ messages: messages });
})

app.post('/messages', function(req, res, next) {
    messages.push({ message: req.body.message, time: new Date() });
    res.status(200).json({ messages: messages });
})






app.listen(3000);
