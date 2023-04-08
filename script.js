const locationInput = document.querySelector('#location');
const checkButton = document.querySelector('#checkButton');
const result = document.querySelector('#result');

locationInput.addEventListener('input', () => {
    checkButton.disabled = !locationInput.value.trim();
});

checkButton.addEventListener('click', () => {
    result.textContent = 'Palaukite, kraunama...';
    setTimeout(() => {
        result.textContent = 'Idk, pažiūrėk per langą';
    },3000);
});
