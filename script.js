// Check if browser supports notifications
// Simplistic example (not functional code)
const appContent = document.getElementById('app');

function showHelloContent() {
  appContent.innerHTML = "<h1>Shopify</h1>";
}

// Handle hash change events (example)
window.addEventListener('hashchange', () => {
  const hash = window.location.hash;
  if (hash === '#hello') {
    showHelloContent();
  }
});

// Initial load (example)
showHelloContent();

if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }
  
  // Request permission for notifications
  Notification.requestPermission().then(permission => {
    // Check if permission is granted
    if (permission === "granted") {
      showNotification();
    }
  });
  
  function showNotification() {
    const notification = new Notification("Hello from our website!");
  }
  
