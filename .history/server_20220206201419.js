const express = require('express'); // load the express library
const app = express();// create an instance of the library
app.get('/hello', (req, res) => res.send('Hello World!'));
const PORT = 4000; app.listen(PORT);


// use express library to listen for URL pattern "/hello" 
// respond with string "Hello World!"
// listen to port 4000