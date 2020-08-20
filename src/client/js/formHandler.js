const handleSubmit = async (event) => {
    event.preventDefault()
    await Client.sendFormData()
}

module.exports = { handleSubmit }



//Extra method tried
/* const formDataSender = require('./formDataSender')
const handleSubmit = async (event) => {
    event.preventDefault()
    await formDataSender.sendFormData()
}
module.exports = { handleSubmit } */