const formDataSender = require('./formDataSender')

const handleSubmit = async (event) => {
    event.preventDefault()
    const formText = document.getElementById('name').value
    const response = await formDataSender.sendFormData(formText)
}

module.exports = { handleSubmit }