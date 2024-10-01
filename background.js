chrome.action.onClicked.addListener((tab) => {
    if (tab.url.includes("mail.google.com")) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: summarizeEmail
      });
    }
  });
  
  function summarizeEmail() {
    // This function will be injected into the page
    // We'll implement it in content.js
  }
  