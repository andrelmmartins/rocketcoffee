
const $toggle = document.querySelector('#toggle')
const $nav = document.querySelector('header nav')
$toggle.addEventListener('click', () => {
    $nav.classList.toggle('open')
    $toggle.classList.toggle('close')
})