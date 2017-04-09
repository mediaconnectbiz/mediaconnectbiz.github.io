var trigger = document.querySelector('.spoiler__trigger');
var Spoiler = (function () {
    function _init () {
        var triggers = document.querySelectorAll('.spoiler__trigger');

        for (var i = 0; i < triggers.length; i++) {
            triggers[i].addEventListener('click', _toggle);
        }
    }

    function _toggle (event) {
        var trigger = event.target;
        var div = closest(trigger, '.reviews__content');

        event.preventDefault();
        if (div.classList.contains('opened')) {
            div.classList.remove('opened');
            trigger.innerText = 'Читать весь отзыв'
        } else {
            div.classList.add('opened');
            trigger.innerText = 'Свернуть';
        }
    }

    return {
        init: _init
    }
})();

trigger && Spoiler.init();