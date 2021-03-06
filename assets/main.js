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

/* ==== SCROLL HEADER, TO-TOP ==== */

const toTopShow = document.querySelector('.to-top')
const scrollTop = document.getElementById('to-top')
const header = document.getElementById('header');

scrollTop.addEventListener('click', function () {
    window.scrollTo({
        top: 0
    })
})

window.onscroll = () => {
    if(this.scrollY >= 200) {
        header.classList.add('scroll-header')
        toTopShow.classList.add('show')
    } else {
        header.classList.remove('scroll-header')
        toTopShow.classList.remove('show')
    }
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

/* ==== REMOVE MENU ==== */

const navLink = document.querySelectorAll('.nav__link');
const navMenu = document.getElementById('nav__menu');

function RemoveMenu() {
    navMenu.classList.remove('show')
}

navLink.forEach( n => n.addEventListener('click', RemoveMenu))


/*==== SCROLL SECTIONS ACTIVE LINK ====*/
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', scrollActive)

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.add('active')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.remove('active')
        }
    })
}