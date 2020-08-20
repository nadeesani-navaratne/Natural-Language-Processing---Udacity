const inputValidater = require('./inputValidater')

const sendFormData = async () => {
    let formText = document.getElementById('name').value
    const validUrl = inputValidater.checkForInput(formText);
    if(validUrl ){
    console.log("::: Form Submitted :::")
    const apiResponse = await fetch(`http://localhost:8081/text?name=${formText}`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    )
    const sentimentValue = await apiResponse.json()
    console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
    console.log(sentimentValue.sentence_list)
    console.log(sentimentValue.sentence_list[0].text)
    
    document.getElementById("result").classList.remove('hidden');
    //document.getElementById("result").classList.add('active');


    document.getElementById('input-id').innerHTML = sentimentValue.sentence_list[0].text
    document.getElementById('agreement-id').innerHTML = sentimentValue.agreement
    document.getElementById('model-id').innerHTML = sentimentValue.model
    document.getElementById('subject-id').innerHTML = sentimentValue.subjectivity
    document.getElementById('confidence-id').innerHTML = sentimentValue.confidence
    document.getElementById('irony-id').innerHTML = sentimentValue.irony 


}
else {
    document.getElementById('results').innerHTML = "Please enter a text!"
}
}



module.exports = { sendFormData } 