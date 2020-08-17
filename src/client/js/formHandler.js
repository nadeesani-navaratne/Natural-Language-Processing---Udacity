const handleSubmit = async (event) => {
    event.preventDefault()
    let formText = document.getElementById('name').value
    console.log("::: Form Submitted :::")
    const apiResponse = await fetch(
        `http://localhost:8081/text?name=${formText}`,
        {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
        }
    )
    updateUI()
}
const updateUI = async () => {
    const request = await fetch('/text');
    try {
        const allData = await request.json();
        console.log(allData.length)
        console.log(allData[0].agreement)
        document.getElementById('results').innerHTML = allData[0].agreement
    }
    catch (error) {
        console.log("error", error);
    }
}
export { handleSubmit }

