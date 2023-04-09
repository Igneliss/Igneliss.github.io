const nameInput = document.getElementById("name-input");
const ageInput = document.getElementById("age-input");
const submitButton = document.getElementById("submit-button");
const loadingText = document.getElementById("loading-text");
const resultText = document.getElementById("result-text");
const nameResult = document.getElementById("name-result");
const ageResult = document.getElementById("age-result");
window.onload = function() {
    document.body.style.opacity = "1";
  }
submitButton.addEventListener("click", () => {
	loadingText.classList.remove("hidden");
	setTimeout(() => {
		loadingText.classList.add("hidden");
		resultText.classList.remove("hidden");
		nameResult.textContent = nameInput.value;
		ageResult.textContent = ageInput.value;
	}, 3000);
});
