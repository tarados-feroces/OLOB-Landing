'use strict';

const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const fs = require('fs');
const bodyParser = require('body-parser');

app.use('/', express.static(path.join('dist')));
app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());

app.listen(process.env.PORT || 5000, () => console.log('Example app listening on port 5000!'));

var counter = 0;

app.use('/email/', function (req, res) {
    const email = req.body.email;
    let status = 200;
    try {
    	fs.appendFileSync('emails.txt', '\n' + ++counter + ': ' + email);
    	console.log('success');
    } catch(e) {
    	status = 403;
    	console.log('Error while writing file: ', e);
    }
    
    res.status(status);
    res.send('DONE');
});
