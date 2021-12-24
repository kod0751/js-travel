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