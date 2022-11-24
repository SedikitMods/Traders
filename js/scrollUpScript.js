const offset = 100;
const scrollUp = document.querySelector('.scrollUp');
scrollUp.addEventListener('click', () => {
    $('.start').css('display', 'block');
    $('.next').css('display', 'none');
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});