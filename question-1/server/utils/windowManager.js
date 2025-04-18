const { WINDOW_SIZE } = require('../config/apiConfig');

let window = [];

function updateWindow(newNumbers) {
  const prevState = [...window];
  for (let num of newNumbers) {
    if (!window.includes(num)) {
      if (window.length >= WINDOW_SIZE) {
        window.shift(); 
      }
      window.push(num);
    }
  }

  const avg = window.length > 0
    ? parseFloat((window.reduce((a, b) => a + b, 0) / window.length).toFixed(2))
    : 0;

  return {
    windowPrevState: prevState,
    windowCurrState: [...window],
    avg
  };
}

module.exports = { updateWindow };
