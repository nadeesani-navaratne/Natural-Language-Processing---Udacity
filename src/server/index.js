const dotenv = require('dotenv');
dotenv.config();
const apiRequest = require('./apiRequest')

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})


app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/text', async (req, res) => {
    const input = req.query.name;
    console.log(input)
    const response = await apiRequest.getRequest(input)
    const data = await response.json();
    res.send(data)
})

console.log(`Your API key is ${process.env.API_KEY}`);