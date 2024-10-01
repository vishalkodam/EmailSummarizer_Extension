# Gmail Summarizer Chrome Extension

## Overview

The Gmail Summarizer is a Chrome extension that provides quick summaries of emails in your Gmail inbox. This tool is designed to help users quickly grasp the content of their emails without opening each one individually.

## Features

- Summarizes Gmail emails with a single click
- Works directly within the Gmail interface
- Provides clear feedback on summarization status
- Redirects users to Gmail if accessed from a non-Gmail tab

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Chrome Extension API

## Data Flow

1. User clicks the "Summarize" button in the popup.
2. Popup script sends a message to the content script.
3. Content script receives the message and initiates summarization.
4. Content script extracts email content and generates a summary.
5. Summary is inserted into the Gmail page.
6. Content script sends a response back to the popup.
7. Popup updates its UI based on the response.

## Error Handling

The extension implements error handling in the following ways:
- Checks for the existence of required DOM elements before operating on them
- Provides user feedback for various scenarios (successful summarization, errors, non-Gmail pages)
- Uses try-catch blocks in critical functions to prevent crashes

## Installation

1. Clone this repository or download the ZIP file.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click "Load unpacked" and select the directory containing the extension files.

## Usage

1. Open Gmail in Google Chrome.
2. Click on the Gmail Summarizer extension icon in the Chrome toolbar.
3. Click the "Summarize" button in the popup.
4. View the summary directly in your Gmail tab.

## Project Structure

- `manifest.json`: Extension configuration file
- `popup.html`: HTML structure for the extension popup
- `popup.js`: JavaScript logic for the popup functionality
- `content.js`: Content script for interacting with Gmail
- `background.js`: Background script for extension functionality
- `style.css`: Styles for the popup UI

## Development

To modify or enhance the extension:

1. Make changes to the relevant files.
2. Save your changes.
3. Go to `chrome://extensions/` in Chrome.
4. Click the refresh icon on the Gmail Summarizer extension card.
5. Test your changes by using the extension.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Thanks to the Chrome Extension development community for their invaluable resources and documentation.
