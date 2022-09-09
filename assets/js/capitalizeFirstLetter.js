var title = document.querySelectorAll('h1, h2, h3, h4, h5, p')

title.forEach(e => {
    e.textContent = e.textContent[0].toUpperCase() + e.textContent.substring(1)
});