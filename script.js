const notificationContainer = document.getElementById('notification-container');
const logoUrl = 'https://cdn.iconscout.com/icon/free/png-256/free-shopify-226579.png';
const orderTexts = [
  'Manaddo has a new order for 1 item totaling €32.07',
  'Manaddo has a new order for 2 items totaling €64.14',
  'Manaddo has a new order for 3 items totaling €64.14',
  'Manaddo has a new order for 4 items totaling €96.21',
];

function showNotification() {
  const notification = document.createElement('div');
  notification.classList.add('notification');

  const notificationImg = document.createElement('img');
  notificationImg.src = logoUrl;
  notification.appendChild(notificationImg);

  const notificationText = document.createElement('span');
  notificationText.classList.add('notification-text');
  const randomTextIndex = Math.floor(Math.random() * orderTexts.length);
  notificationText.textContent = orderTexts[randomTextIndex];
  notification.appendChild(notificationText);

  notificationContainer.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000); // Remove notification after 3 seconds
}

// Check for notification permission on page load
if (Notification.permission === 'granted') {
  showNotifications();
} else if (Notification.permission !== 'denied') {
  Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
      showNotifications();
    }
  });
}

function showNotifications() {
  const intervalId = setInterval(() => {
    const randomInterval = Math.floor(Math.random() * 10) + 1; // Generate random interval between 1 and 10 seconds
    showNotification();
  }, randomInterval * 1000);

  // Clear the interval when the user leaves the page
  window.addEventListener('blur', () => {
    clearInterval(intervalId);
  });
}
