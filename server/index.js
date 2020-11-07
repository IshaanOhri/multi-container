const express = require('express');
const moment = require('moment');

const app = express();

const HOST = process.env.HOST;
const PORT = process.env.PORT;

app.get('/health', (req, res) => {
    console.log('Home route');
    
    res.send({
        success: true,
        message: 'Welcome to Multi Container App',
        timestamp: moment().format()
    });
});

app.listen(PORT, HOST, () => {
    console.log(`Server listening on http://${HOST}:${PORT}`);
})