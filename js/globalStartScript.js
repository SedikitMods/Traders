const BtnStart = document.getElementById('BtnStart')

const tryAgain = () => {
    document.querySelector('.start_logo').classList.add('active');
    document.querySelector('.overlay').classList.add('active');
};

BtnStart.addEventListener('click', tryAgain);