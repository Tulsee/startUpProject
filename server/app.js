const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const UserRoutes = require('./routes/users');

app.use(bodyParser.json());

app.use('/api/v1/users', UserRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, function () {
    console.log(`App is running at port ${PORT}`);
});