document.addEventListener('DOMContentLoaded', function() {
  const summarizeBtn = document.getElementById('summarizeBtn');
  const messageDiv = document.getElementById('message');
  const resultDiv = document.getElementById('result');

  if (!summarizeBtn || !messageDiv || !resultDiv) {
    console.error('One or more required elements are missing from the DOM');
    return;
  }

  summarizeBtn.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      const currentTab = tabs[0];
      if (currentTab.url.includes('mail.google.com')) {
        // Clear previous messages and results
        messageDiv.textContent = '';
        resultDiv.textContent = '';
        
        // Send message to content script to summarize
        chrome.tabs.sendMessage(currentTab.id, {action: "summarize"}, function(response) {
          if (chrome.runtime.lastError) {
            messageDiv.textContent = "Error: " + chrome.runtime.lastError.message;
          } else if (response && response.status === "Summarization complete") {
            resultDiv.textContent = "Summarization complete. Check your Gmail tab.";
          } else {
            messageDiv.textContent = "An unexpected error occurred.";
          }
        });
      } else {
        messageDiv.innerHTML = 'Please <a href="https://mail.google.com/" target="_blank">open Gmail</a> to use this extension.';
        resultDiv.textContent = ''; // Clear any previous results
      }
    });
  });
});