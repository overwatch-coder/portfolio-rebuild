// declare variables
require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();
const mailRoutes = require('./routes/mailRoutes');
const path = require('path');

// apply middleware
app.use(express.json())
app.use(cors())

app.use('/send', mailRoutes);

app.get('*', (req, res) => {
    res.redirect('/send')
})

// set static files to render front-end
app.use(express.static(path.join(__dirname, "/front-end/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/front-end/build', 'index.html'));
});


// get current port number
const PORT = process.env.PORT || 5000

// listen to server files
app.listen(PORT, (err) => {
    if(err) console.log(err);
    console.log('Listening on port ' + PORT)
})

