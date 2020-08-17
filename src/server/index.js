const dotenv = require('dotenv');
dotenv.config();
const apiRequest = require('./apiRequest')

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

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

//Route data to an empty array where used to update in the UI
const postData = [];

app.post('/text', async (req, res) => {
    const input = req.query.name;
    console.log(input)
    const response = await apiRequest.getRequest(input)
    //res.send(mockAPIReconst data =  response.json();sponse)
    const data = await response.json();
    postData.push(data)
    res.send(data)
})


app.get('/text', getData)
function getData(req, res) {
    res.send(postData);
}

console.log(`Your API key is ${process.env.API_KEY}`);