const titlebox = document.querySelector('titlebox')
const title = document.querySelector('title')
const title_toogle = document.querySelector('title_toogle')

titlebox.addEventListener('click', () => {
    title_toogle.classList.toggle('active');
    title.title_toogle('active');
})