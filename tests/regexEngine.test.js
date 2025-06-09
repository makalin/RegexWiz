const { generateRegex, explainRegex, roastRegex } = require('../src/regexEngine');

describe('regexEngine', () => {
  test('generateRegex returns email regex for email task', () => {
    expect(generateRegex('match email addresses')).toBe('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$');
  });
  test('generateRegex returns empty string for unknown task', () => {
    expect(generateRegex('unknown')).toBe('');
  });
  test('explainRegex returns explanation for email regex', () => {
    const explanation = explainRegex('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$');
    expect(Array.isArray(explanation)).toBe(true);
    expect(explanation[0]).toMatch(/asserts the start/);
  });
  test('explainRegex returns fallback for unknown pattern', () => {
    expect(explainRegex('foo')).toEqual(['No explanation available.']);
  });
  test('roastRegex returns roast for email regex', () => {
    expect(roastRegex('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')).toMatch(/chill/);
  });
  test('roastRegex returns fallback for unknown pattern', () => {
    expect(roastRegex('foo')).toBe('No roast for this pattern.');
  });
}); 