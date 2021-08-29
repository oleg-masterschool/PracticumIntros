const express = require('express');

const app = express();

app.use(express.static('./src'));

// Serve the files on port 3000.
app.listen(3000, function () {
    console.log('http://localhost:3000!\n');
});
