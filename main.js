$(window).on("load",function(){
    $(".video__list").mCustomScrollbar();

    (function() {
        if (location.hash.indexOf('#for')==0 && window.location.hash.length > 0) {
            var a = document.querySelector('a.tabs__trigger[href="' + window.location.hash + '"]');

            var event;

            if (document.createEvent) {
                event = document.createEvent('Event');
            } else {
                event = new Event('click', {
                    'view': window,
                    'bubbles': true,
                    'cancelable': true
                });
            }
            event.initEvent('click', true, true);
            a.dispatchEvent(event);
        }
    })();
});

function closest(node, css){
    if (Element && !Element.prototype.matches) {
        var proto = Element.prototype;
        proto.matches = proto.matchesSelector ||
            proto.mozMatchesSelector || proto.msMatchesSelector ||
            proto.oMatchesSelector || proto.webkitMatchesSelector;
    }

    while (node) {
        if (node.matches(css)) return node;
        else node = node.parentElement;
    }

    return null;
}