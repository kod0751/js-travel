/* ==== SEARCH ==== */

const search = document.querySelector('.nav__search')
const searchInput = search.querySelector('input')

search.addEventListener('click', function () {
    searchInput.focus();
});

searchInput.addEventListener('focus', function() {
    search.classList.add('focused');
    searchInput.setAttribute('placeholder', '통합검색');
});

searchInput.addEventListener('blur', function() {
    search.classList.remove('focused');
    searchInput.setAttribute('placeholder', '');
});

/* ==== SCROLL HEADER ==== */

window.onscroll = () => {
    const header = document.getElementById('header');
    if(this.scrollY >= 200) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}

/* ==== SHOW MENU ==== */

const showMenu = ( toggleId, navId ) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if( toggle && nav ) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav__toggle', 'nav__menu');