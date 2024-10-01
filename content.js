function summarizeEmail() {
  const subjectElement = document.querySelector('h2[data-thread-perm-id]');
  const bodyElement = document.querySelector('.a3s.aiL');

  if (!subjectElement || !bodyElement) {
    console.log('Email subject or body not found');
    return;
  }

  const subject = subjectElement.textContent;
  const body = bodyElement.textContent;

  // Simple summarization function (you may want to improve this)
  function simpleSummarize(text, sentenceCount = 2) {
    const sentences = text.match(/[^\.!\?]+[\.!\?]+/g);
    return sentences.slice(0, sentenceCount).join(' ');
  }

  const summary = simpleSummarize(body);

  // Create or update summary display
  let summaryElement = document.getElementById('email-summary');
  if (!summaryElement) {
    summaryElement = document.createElement('div');
    summaryElement.id = 'email-summary';
    summaryElement.style.padding = '10px';
    summaryElement.style.backgroundColor = '#f0f0f0';
    summaryElement.style.border = '1px solid #ccc';
    summaryElement.style.marginBottom = '10px';
    bodyElement.parentNode.insertBefore(summaryElement, bodyElement);
  }

  summaryElement.innerHTML = `
    <strong>Subject:</strong> ${subject}<br>
    <strong>Summary:</strong> ${summary}
  `;
}

// Listen for messages from the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "summarize") {
    summarizeEmail();
    sendResponse({status: "Summarization complete"});
  }
});