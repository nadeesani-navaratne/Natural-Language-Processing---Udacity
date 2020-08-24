// Import the js file to test

const formHandler = require('../src/client/js/formHandler')

describe("Testing the submit functionality", () => {
    test("Testing the handleSubmit() function", async () => {
        await expect(formHandler.handleSubmit).toBeDefined();
    })
});