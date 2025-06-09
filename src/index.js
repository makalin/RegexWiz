const express = require('express');
const app = express();
const path = require('path');
app.use(express.json());
const { generateRegex, explainRegex, roastRegex } = require('./regexEngine');

// Generate regex pattern from task
app.post('/api/generate', (req, res) => {
  const { task } = req.body;
  if (!task) return res.status(400).json({ error: 'Task required' });
  const pattern = generateRegex(task);
  const explanation = explainRegex(pattern);
  const roast = roastRegex(pattern);
  res.json({ pattern, explanation, roast });
});

// Test regex pattern against a sample input
app.post('/api/test', (req, res) => {
  const { pattern, sample } = req.body;
  if (!pattern || !sample) return res.status(400).json({ error: 'Pattern and sample required' });
  try {
    const regex = new RegExp(pattern);
    const matches = regex.test(sample);
    res.json({ matches });
  } catch (err) {
    res.status(400).json({ error: 'Invalid regex pattern' });
  }
});

// Health check
app.get('/', (req, res) => {
  res.send('RegexWiz API is running.');
});

app.use(express.static(path.join(__dirname, '../public')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`RegexWiz server running on port ${PORT}`);
}); 