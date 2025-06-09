# RegexWiz

RegexWiz is a dynamic Regex Cheat Sheet Generator that simplifies creating and testing regular expressions. Input a task (e.g., "match email addresses"), and RegexWiz outputs a regex pattern, an interactive tester, and a clear explanation. Its unique "Regex Roast" feature humorously critiques overly complex patterns, making regex fun and approachable.

## Features

- **Task-Based Regex Generation**: Enter a task, get a tailored regex pattern.
- **Interactive Tester**: Test patterns in real-time with sample inputs.
- **Explanations**: Understand each regex component with concise breakdowns.
- **Regex Roast**: Get witty feedback on convoluted patterns to keep things simple.
- **Tech Stack**: Built with JavaScript (web or Node.js) and regex libraries.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/makalin/RegexWiz.git
   ```
2. Navigate to the project directory:
   ```bash
   cd RegexWiz
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the application:
   ```bash
   npm start
   ```

## Usage

1. Open the app in your browser or run it via Node.js.
2. Enter a task (e.g., "match URLs" or "find phone numbers").
3. Receive a regex pattern, test it interactively, and read the explanation.
4. If your pattern is overly complex, enjoy a "Regex Roast" with tips to simplify.
5. Copy the regex or tweak it directly in the tester.

## Example

**Input Task**: "Match email addresses"  
**Output**:  
- **Pattern**: `^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`  
- **Explanation**: 
  - `^` asserts the start.
  - `[a-zA-Z0-9._%+-]+` matches one or more alphanumeric characters, dots, or specific symbols for the local part.
  - `@` matches the @ symbol.
  - `[a-zA-Z0-9.-]+` matches the domain name.
  - `\.` matches a literal dot.
  - `[a-zA-Z]{2,}` matches the top-level domain (2+ letters).
  - `$` asserts the end.
- **Regex Roast**: "Trying to match emails or summon a regex demon? Keep it chill—don’t overcomplicate the domain!"

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

Please follow the [Code of Conduct](CODE_OF_CONDUCT.md) and ensure tests pass.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with love for developers struggling with regex.
- Inspired by the joy of simplifying complex patterns.
- Thanks to the JavaScript and regex communities for endless inspiration.
