const express = require('express')
const app = express()
const https = require('https')
const http = require('http')
const fs = require('fs')
const port = 3000
const path = require('path');

app.use(express.static('phone_assets'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/phone_assets/index.html'));
})

const httpsOptions = {
    key: fs.readFileSync('./security/cert.key'),
    cert: fs.readFileSync('./security/cert.pem')
}


const server = https.createServer(httpsOptions, app)
    .listen(port, () => {
        console.log('server running at ' + port)
    })
