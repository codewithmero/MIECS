// Title popup
const navbarTitle = document.querySelector('.navbar__title');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');

navbarTitle.addEventListener('click', e => {
    popup.style.display = 'block';
});

close.addEventListener('click', e => {
    popup.style.display = 'none';
});

popup.addEventListener('click', e => {
    if(e.target.className === 'popup-wrapper') {
        popup.style.display = 'none';
    }
});



// Section "initiatives" popups