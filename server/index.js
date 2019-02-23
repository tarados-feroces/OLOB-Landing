const express = require('express');
const app = express();
const path = require('path');

app.use('/', express.static(path.join('dist')));
app.listen(process.env.PORT || 8080, () => console.log('Example app listening on port 8080!'));
