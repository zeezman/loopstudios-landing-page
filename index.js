const toggleButton = document.getElementsByClassName('open-btn')[0]
const navLinks = document.getElementsByClassName('nav-links')[0]

toggleButton.addEventListener('click', (e) => {
    navLinks.classList.toggle('active')
    e.preventDefault()
})  