//Logique du header

const handleScroll = () => {
    const title = document.querySelector('.title') || document.querySelector('.minimized');
    const backToTopBtn = document.getElementById('backToTop');
    const red = document.querySelector('.red');


    if (document.documentElement.scrollTop > 300) {
        title.classList.remove('title');
        title.classList.add('minimized');
        backToTopBtn.classList.remove('hide');
        red.classList.add('hide');
    } else {
        title.classList.remove('minimized');
        title.classList.add('title');
        backToTopBtn.classList.add('hide');
        red.classList.remove('hide');
}
}

window.onscroll = () => {
    handleScroll();
}

document.getElementById('backToTop').addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
})
