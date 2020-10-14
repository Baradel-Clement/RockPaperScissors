let rulesOverlay = document.querySelector('.rules-overlay');
let btnRules = document.querySelector('.rules');
let btnClose = document.querySelector('.close-button-rules');
let darkOverlay = document.querySelector('.dark-overlay-rules');

btnRules.addEventListener('click', (e) => {
    e.preventDefault()

    darkOverlay.classList.toggle('active');
    rulesOverlay.classList.toggle('active');
});

btnClose.addEventListener('click', (e) => {
    e.preventDefault()

    darkOverlay.classList.toggle('active');
    rulesOverlay.classList.toggle('active');
});