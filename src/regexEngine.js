function generateRegex(task) {
  if (task.toLowerCase().includes('email')) {
    return '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$';
  }
  return '';
}

function explainRegex(pattern) {
  if (pattern === '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$') {
    return [
      '^ asserts the start.',
      '[a-zA-Z0-9._%+-]+ matches one or more alphanumeric characters, dots, or specific symbols for the local part.',
      '@ matches the @ symbol.',
      '[a-zA-Z0-9.-]+ matches the domain name.',
      '\\.' + ' matches a literal dot.',
      '[a-zA-Z]{2,} matches the top-level domain (2+ letters).',
      '$ asserts the end.'
    ];
  }
  return ['No explanation available.'];
}

function roastRegex(pattern) {
  if (pattern === '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$') {
    return "Trying to match emails or summon a regex demon? Keep it chill—don't overcomplicate the domain!";
  }
  return 'No roast for this pattern.';
}

module.exports = { generateRegex, explainRegex, roastRegex }; 