const request = require('supertest');
const express = require('express');
const app = express();
app.use(express.json());
app.post('/api/generate', (req, res) => {
  const { task } = req.body;
  if (!task) return res.status(400).json({ error: 'Task required' });
  if (task.toLowerCase().includes('email')) {
    return res.json({
      pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
      explanation: [
        '^ asserts the start.',
        '[a-zA-Z0-9._%+-]+ matches one or more alphanumeric characters, dots, or specific symbols for the local part.',
        '@ matches the @ symbol.',
        '[a-zA-Z0-9.-]+ matches the domain name.',
        '\\.' + ' matches a literal dot.',
        '[a-zA-Z]{2,} matches the top-level domain (2+ letters).',
        '$ asserts the end.'
      ],
      roast: "Trying to match emails or summon a regex demon? Keep it chill—don't overcomplicate the domain!"
    });
  }
  res.json({
    pattern: '',
    explanation: ['No pattern available for this task.'],
    roast: 'No roast for this pattern.'
  });
});
describe('POST /api/generate', () => {
  it('should return email regex for email task', async () => {
    const res = await request(app)
      .post('/api/generate')
      .send({ task: 'match email addresses' });
    expect(res.statusCode).toBe(200);
    expect(res.body.pattern).toContain('@');
    expect(res.body.explanation).toBeInstanceOf(Array);
    expect(res.body.roast).toMatch(/chill/);
  });
  it('should return fallback for unknown task', async () => {
    const res = await request(app)
      .post('/api/generate')
      .send({ task: 'unknown task' });
    expect(res.statusCode).toBe(200);
    expect(res.body.pattern).toBe('');
    expect(res.body.explanation[0]).toMatch(/No pattern/);
  });
  it('should return 400 if no task', async () => {
    const res = await request(app)
      .post('/api/generate')
      .send({});
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe('Task required');
  });
});
describe('POST /api/test', () => {
  it('should return true for matching pattern and sample', async () => {
    const res = await request(app)
      .post('/api/test')
      .send({ pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$', sample: 'test@example.com' });
    expect(res.statusCode).toBe(200);
    expect(res.body.matches).toBe(true);
  });
  it('should return false for non-matching pattern and sample', async () => {
    const res = await request(app)
      .post('/api/test')
      .send({ pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$', sample: 'invalid' });
    expect(res.statusCode).toBe(200);
    expect(res.body.matches).toBe(false);
  });
  it('should return 400 if pattern or sample is missing', async () => {
    const res = await request(app)
      .post('/api/test')
      .send({ pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$' });
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe('Pattern and sample required');
  });
  it('should return 400 for invalid regex pattern', async () => {
    const res = await request(app)
      .post('/api/test')
      .send({ pattern: '[', sample: 'test' });
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe('Invalid regex pattern');
  });
}); 