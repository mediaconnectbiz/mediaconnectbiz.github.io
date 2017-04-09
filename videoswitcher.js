var videoList = document.querySelector('.video__list');
var Popup = (function () {
    var _init = function () {
        videoList.addEventListener('click', _switchVideo)
    };

    function _switchVideo(event) {
        var target = closest(event.target, '.video__item');
        var href = target.querySelector('.video__name').getAttribute('href');
        var parent = closest(target, '.video');
        var items = document.querySelectorAll('.video__item');
        var videoContainer;

        if (event.target.nodeName == 'A') {
            event.preventDefault();
        }
        if (!target.classList.contains('active')) {
            for (var i = 0; i < items.length; i++) {
                items[i].classList.remove('active');
            }
            target.classList.add('active');

            videoContainer = parent.querySelector('.video__half');
            videoContainer.innerHTML = href;
        }
    }

    return {
        init: _init
    }
})();

videoList && Popup.init();
