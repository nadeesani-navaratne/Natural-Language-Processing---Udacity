function checkForInput(inputText) {
    if (inputText.length > 0) {
      console.log('Valid Text');
      return true
    } else {
      console.log('Please enter a text');
      return false
    }
  }
  
  export { checkForInput}