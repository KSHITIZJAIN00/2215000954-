
const express = require('express');
const router = express.Router();
const { fetchNumbers } = require('../services/numberService');
const { updateWindow } = require('../utils/windowManager');

router.get('/:numberid', async (req, res) => {
  const { numberid } = req.params;
  const validIds = ['p', 'f', 'e', 'r'];

  if (!validIds.includes(numberid)) {
    return res.status(400).json({ error: "Invalid number ID" });
  }

  const numbers = await fetchNumbers(numberid);
  const { windowPrevState, windowCurrState, avg } = updateWindow(numbers);

  res.json({
    windowPrevState,
    windowCurrState,
    numbers,
    avg
  });
});

module.exports = router;
