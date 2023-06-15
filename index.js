const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



const subscribeRoute = require('./Routes/subscribe');
const registerRoute = require('./Routes/register');
const loginRoute = require('./Routes/login');

app.use(express.urlencoded({ extended: true }));

app.use('/subscribe', subscribeRoute);
app.use('/register', registerRoute);
app.use('/login', loginRoute);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
