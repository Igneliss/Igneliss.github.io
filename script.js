document.addEventListener("DOMContentLoaded", function() {
    const yesButton = document.querySelector('.yes-button');
    const noButton = document.querySelector('.no-button');

    let clickCount = 0; // Variable to keep track of the number of clicks

    noButton.addEventListener('click', function() {
        clickCount++;
        switch (clickCount) {
            case 1:
                noButton.textContent = 'Ar tikrai?';
                break;
            case 2:
                noButton.textContent = 'Ar tikrai tikrai?';
                break;
            case 3:
                noButton.textContent = 'Man atrodo tu meluoji';
                break;
            case 4:
                noButton.textContent = 'Ne';
                clickCount = 0; // Reset click count after the fourth click
                break;
        }
        yesButton.style.transform = `scale(${parseFloat(yesButton.style.transform.split("(")[1] || 1) + 0.2})`;
    });

    yesButton.addEventListener('click', function() {
        // Hide current content
        document.body.innerHTML = "";

        // Create new elements for the new screen
        const newScreen = document.createElement('div');
        newScreen.className = 'new-screen';

        const gif = document.createElement('img');
        gif.src = 'https://media.tenor.com/IW5jiF1BZHQAAAAi/confetti-glitter.gif';
        gif.alt = 'loading';
        gif.style.width = '40%';

        const incredibleText = document.createElement('p');
        incredibleText.textContent = 'Puiku!';
        incredibleText.style.marginTop = '20px';
        incredibleText.style.fontSize = '20px';

        newScreen.appendChild(gif);
        newScreen.appendChild(incredibleText);
        document.body.appendChild(newScreen);

        // Center the new screen
        newScreen.style.display = 'flex';
        newScreen.style.flexDirection = 'column';
        newScreen.style.alignItems = 'center';
        newScreen.style.justifyContent = 'center';
        newScreen.style.height = '100vh';

        // Fade out animation
        setTimeout(function() {
            newScreen.style.transition = 'opacity 0.2s';
            newScreen.style.opacity = '0';
            // Show another screen after fade out
            setTimeout(function() {
                newScreen.innerHTML = "";
                const newScreen2 = document.createElement('div');
                newScreen2.className = 'new-screen';

                const gif2 = document.createElement('img');
                gif2.src = 'https://cdn.dribbble.com/users/91300/screenshots/2694810/001_happy-mothers-day_animation_text.gif';
                gif2.alt = 'loading';
                gif2.style.width = '40%';

                const mothersDayText = document.createElement('p');
                mothersDayText.textContent = 'SU MAMYČIŲ DIENA! 🥰🌺';
                mothersDayText.style.marginTop = '25px';
                mothersDayText.style.fontWeight = 'bold';
                mothersDayText.style.fontSize = '20px';
                mothersDayText.style.textAlign = 'center';

                const loremText = document.createElement('p');
                loremText.textContent = 'Neturėjau laiko nupirkti gėlių ir nieko vakar neradau Akropolyje, tai skyriau laiko sukurti šitą svetainę 😆 Myliuuuuuuuu! 💕 ❤️ 💝 ';
                loremText.style.marginTop = '0px';
                loremText.style.textAlign = 'center';
                loremText.style.fontSize = '18px';

                newScreen2.appendChild(gif2);
                newScreen2.appendChild(mothersDayText);
                newScreen2.appendChild(loremText);
                document.body.appendChild(newScreen2);

                // Center the second new screen
                newScreen2.style.display = 'flex';
                newScreen2.style.flexDirection = 'column';
                newScreen2.style.alignItems = 'center';
                newScreen2.style.justifyContent = 'center';
                newScreen2.style.height = '100vh';

                setTimeout(function() {
                    window.location.href = 'vid.mp4';
                }, 10000);
            }, 200);
        }, 1500);
    });
});
