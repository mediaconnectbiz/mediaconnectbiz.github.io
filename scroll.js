(function() {
    var links = document.querySelectorAll('a');
    var linksWithHash = Array.prototype.filter.call(links, function (link) {
        return (link.href.indexOf('#') != -1);
    });

    linksWithHash.forEach(function (item) {
        item.addEventListener('click', function (event) {

            var $this = $(this),
                href = $this.attr('href'),
                pos =  href.indexOf('#'),
                id = href.slice(pos),
                top;

            //140px - высота зафиксированного хедера + панельки админки
            if (id.length > 1) {
                top = document.querySelector(id).getBoundingClientRect().top + window.pageYOffset
            } else {
                top = 140;
            }
            top -= 140;

            $('html,body').animate({
                scrollTop: top
            }, 500);
        });
    });

}());