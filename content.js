// Listen for messages from the popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "applyStyles") {
    applyStyles();
    sendResponse({status: "Styles applied successfully!"});
  }
  return true;
});

// Function to apply the CSS styles
function applyStyles() {
  // Create a style element
  const styleEl = document.createElement('style');
  
  // Add the CSS content
  styleEl.textContent = `
  * {
      font-family: 'Bangers', cursive !important;
      color: #ef5350;
      font-weight: bold;
  }
  body, html * {
    background: white !important;
    background-image: none !important;
  }
  @keyframes wobble {
    0% { transform: rotate(2deg); }
    50% { transform: rotate(-2deg); }
    100% { transform: rotate(2deg); }
  }
  
  h1, h2, h3 {
    display: inline-block;
    animation: wobble 0.2s infinite alternate ease-in-out;
  }
  img {
    filter: contrast(1000%) brightness(100%);
    animation: wobble 0.2s infinite alternate ease-in-out
  }
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }
  
  button {
    animation: bounce 0.3s infinite alternate ease-in-out;
  }
  `;
  
  // Append the style element to the document head
  document.head.appendChild(styleEl);
}
