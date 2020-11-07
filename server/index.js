const express = require('express');

const app = express();

const HOST = process.env.HOST;
const PORT = process.env.PORT;

app.get('/', (req, res) => {
    console.log('Home route');
    res.send({
        success: true,
        message: 'Welcome to Multi Container App'
    });
});

app.listen(PORT, HOST, () => {
    console.log(`Server listening on http://${HOST}:${PORT}`);
})