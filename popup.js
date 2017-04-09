var trigger = document.querySelector('.popup__trigger');
var Popup = (function () {
    function _init() {
        var triggers = document.querySelectorAll('.popup__trigger');
        var closeButton = document.querySelector('.popup__close');

        for (var i = 0; i < triggers.length; i++) {
            triggers[i].addEventListener('click', _showPopup);
        }
        closeButton.addEventListener('click', _closePopup);
    }

    function _showPopup (event) {
        var div = document.querySelector('.popup');
        var src = this.getAttribute('href');
        var videoContainer = div.querySelector('.popup__video');
        var iframe;

        event.preventDefault();
        if (src) {
            videoContainer.innerHTML = src;
            iframe = videoContainer.querySelector('iframe');
            iframe.setAttribute('style', '');//сбросить стили
        }
        div.classList.add('visible');

    }

    function _closePopup(event) {
        var div = closest(event.target, '.popup');
        var videoframe = div.querySelector('.popup__video iframe');
        videoframe.src = '';

        div.classList.remove('visible');
    }

    return {
        init: _init
    }
})();

trigger && Popup.init();
