const express = require('express');
const path = require('path');

const app = express();

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../client')));

app.get('/health', (req, res) => {
    console.log('Home route');
    res.send({
        success: true,
        message: 'Welcome to Multi Container App'
    });
});

app.listen(PORT, HOST, () => {
    console.log(`Server listening on http://${HOST}:${PORT}`);
})