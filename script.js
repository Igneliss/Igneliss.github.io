// Check if browser supports notifications
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
  
