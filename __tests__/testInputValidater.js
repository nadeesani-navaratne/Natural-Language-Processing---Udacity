
const  inputValidater = require('../src/client/js/inputValidater')

// The describe() function takes two arguments - a string description, and a test suite as a callback function.  
// A test suite may contain one or more related tests    
describe("Testing the nameChecker function", () => {  
  test("Testing the nameChecker function", () => {
    expect(inputValidater.checkForInput('')).toBeFalsy();
  })
  test('true is truthy', () => {
    expect(true).toBe(true)
  })
});