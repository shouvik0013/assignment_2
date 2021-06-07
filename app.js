const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('First middleware');
    return next(); // calling the next middleware
});

app.use((req, res, next) => {
    console.log('Second middleware');
    return res.send('<h3> Response from second middleware</h3>');
})

app.listen(3000);