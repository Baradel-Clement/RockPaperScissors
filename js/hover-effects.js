const hover = document.querySelector('.hover-effect');
const options = document.querySelectorAll('.option-user')

options.forEach(option => {
    option.addEventListener('mouseenter', () => {
        if (option.classList.contains('step2') == false && option.classList.contains('option-computer') == false) {
        option.firstElementChild.classList.toggle('active')
        } else {
            option.firstElementChild.classList.toggle('active')
        }
    })
})

options.forEach(option => {
    option.addEventListener('mouseout', () => {
        if (option.classList.contains('step2') == false && option.classList.contains('option-computer') == false) {
            option.firstElementChild.classList.toggle('active')
        } else {
            option.firstElementChild.classList.toggle('active')
        }
    })
})