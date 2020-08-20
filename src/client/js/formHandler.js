const formDataSender = require('./formDataSender')

const handleSubmit = async (event) => {
    event.preventDefault()
    await formDataSender.sendFormData()
}

module.exports = { handleSubmit }