const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {User} = require('./model/User');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/users', (req, res) => {
    var user = new User({
        username: req.body.username,
        password: req.body.password,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        age: req.body.age,
        gender: req.body.gender,
        job: req.body.job,
        income: req.body.income,
        PayPal_account_number: req.body.PayPal_account_number,
        ssn: req.body.ssn,
        passport_number: req.body.passport_number,
        borrow_balance: req.body.borrow_balance,
        borrow_credit_line: req.body.borrow_credit_line,
        invest_balance: req.body.invest_balance,
        credit_score: req.body.invest_balance
    });

    user.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});


app.get('/users', (req, res) => {
    User.find().then((users) => {
        res.send({users});
    }, (e) => {
        res.status(400).send(e);
    });
});



app.get('/users/:username', (req, res) => {
    var user_name = req.params.username;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    User.find({ user_name: user_name}).then((user) => {
        if(!user) {
            return res.status(404).send();
        }

        res.send({user});

    }).catch((e) => {
        res.status(400).send();
    });

});






app.listen(port, () => {
    console.log(`Started up at port ${port}`);
});

module.exports = {app};




