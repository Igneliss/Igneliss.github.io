const cityInput = document.getElementById('city-input');
const checkButton = document.getElementById('check-button');
const loadingText = document.querySelector('.loading-text');
const resultText = document.querySelector('.result-text');

window.onload = function() {
  document.body.style.opacity = "1";
}

checkButton.addEventListener('click', function() {
  // Show loading text and hide other elements
  loadingText.classList.remove('hidden');
  cityInput.classList.add('hidden');
  checkButton.classList.add('hidden');
  document.querySelector('.sub-title').classList.add('hidden');
  
  // Wait for 3 seconds and then show result text
  setTimeout(function() {
    loadingText.classList.add('hidden');
    resultText.classList.remove('hidden');
  }, 3000);
});
