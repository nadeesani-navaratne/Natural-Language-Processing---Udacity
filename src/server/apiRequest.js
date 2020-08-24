const fs = require('fs');
const fetch = require('node-fetch');
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';

exports.getRequest = (inputText) => {
    const urlToFetch = `${baseURL}?key=${process.env.API_KEY}&lang=en&txt=${inputText}`
    const response = fetch(urlToFetch);
    try {
        return response;
    }
    catch (error) {
        console.log("error", error);
    }
}


