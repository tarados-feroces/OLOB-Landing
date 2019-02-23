const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const fs = require('fs');
bodyParser = require('body-parser');

app.use('/', express.static(path.join('dist')));
app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());

app.listen(process.env.PORT || 5000, () => console.log('Example app listening on port 5000!'));

app.use('/email/', function (req, res) {
    const email = req.body.email;
    let status = 200;
    fs.appendFileSync('emails.txt', '\n' + email, (error) => {
        if (error) {
            console.log('Write to file error: ', error);
            status = 403;
            return;
        }
        console.log('success');

    });
    res.status(status);
    res.send('DONE');
});
