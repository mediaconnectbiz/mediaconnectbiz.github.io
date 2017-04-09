$(document).ready(function() {
    window.addEventListener('scroll', changeActiveLink, false);
});
function changeActiveLink() {
    var headerLinks = document.querySelectorAll('.header__link');
    //140px - высота закрепленной шапки и панельки админки, не учитываем ее
    var elem = document.elementFromPoint(0, 141);
    var section = closest(elem, 'section');

    var id = section.querySelector('.tabs__item.active')?
        section.querySelector('.tabs__item.active .tabs__trigger').href : ('#' + section.getAttribute('id'));

    for (var j = 0; j < headerLinks.length; j++) {
        if (headerLinks[j].href.indexOf(id) != -1) {
            headerLinks[j].classList.add('active');
        } else {
            headerLinks[j].classList.remove('active');
        }
    }

}