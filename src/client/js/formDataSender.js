const sendFormData = async () => {
    let formText = document.getElementById('name').value
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
    document.getElementById('results').innerHTML = sentimentValue.agreement
}

module.exports = { sendFormData } 