const navBar = document.getElementById('navBar');
const toggleBtnM = document.getElementById('mobileToggleBtn');
const iconBtnToggle = document.getElementById('toggleBtnIcon');

toggleBtnM.addEventListener('click', () => {
    const navVisible = navBar.getAttribute('data-visible');

    if (navVisible === 'false') {
        navBar.setAttribute('data-visible', true);
        toggleBtnM.setAttribute('aria-expanded', true);
        iconBtnToggle.src = './assets/images/icon-menu-close.svg'
    } else if (navVisible === 'true') {
        navBar.setAttribute('data-visible', false);
        toggleBtnM.setAttribute('aria-expanded', false);
        iconBtnToggle.src = './assets/images/icon-menu.svg'
    }
});

function heroChangeImg() {
    const image = document.getElementById('heroImage');
    const viewPortWidth = window.innerWidth || document.documentElement.clientWidth;

    if (viewPortWidth <= 430) {
        image.src = './assets/images/image-web-3-mobile.jpg';
    } else if (viewPortWidth > 430) {
        image.src = './assets/images/image-web-3-desktop.jpg';
    }
};

heroChangeImg();

window.addEventListener('resize', heroChangeImg);
