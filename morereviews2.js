var button = document.getElementById('more-reviews');
var showReviews = (function () {
    var _init = function () {
        button.addEventListener('click', _expandReviews);
    };

    var _expandReviews = function () {
        var hiddenReviews = document.querySelectorAll('.reviews__item.hidden');
        var amount = (hiddenReviews.length > 3)? 3 : hiddenReviews.length;

        if (!button.classList.contains('disabled')) {
            for (let i = 0; i < amount; i++) {
                hiddenReviews[i].classList.remove('hidden');
            }

            if (hiddenReviews.length <= 3) {
                button.setAttribute('disabled', true);
                button.classList.add('disabled')
            }
        }
    };

    return {
        init: _init
    }
})();

button && showReviews.init();