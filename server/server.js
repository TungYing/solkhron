const express = require('express');
const path = require('path');
const http = require('http');

const buildPath = path.join(__dirname, '/build');

const { PORT = '3000' } = process.env;
const app = express();

app.use('/static',
  express.static(path.join(buildPath, 'static'), {
    maxAge: '5h',
  }));


app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});


const httpServer = http.createServer(app);
httpServer.listen(+PORT);

console.info('Listening on port %s. Open up http://localhost:%s/ in your browser.', PORT, PORT);
