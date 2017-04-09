(function () {
    var links  = document.querySelectorAll('.tabs__trigger');

    for(var i = 0; i< links.length; i++) {
        links[i].addEventListener('click', showTab);
    }

    function showTab(event){
        var $this = closest(event.target, '.tabs__trigger'),
            substrPosition = $this.getAttribute('href').indexOf('#'),
            id = $this.getAttribute('href').substr(substrPosition+1),
            nextContent = document.getElementById(id),

            nextItem = closest(document.querySelector('a[href="' + '#' + id + '"'), '.tabs__item'),

            parent = closest(nextContent, '.tabs'),
            prevItem = parent.querySelector('.tabs__item.active'),
            allTabsContent = parent.querySelectorAll('.tabs__content');

        if (event.target.classList.contains('tabs__link')) {
            event.preventDefault();
        }

        for (var i = 0; i < allTabsContent.length; i++) {
            if (allTabsContent[i] != nextContent) {
                allTabsContent[i].style.display = 'none';
            }
        }
        $(nextContent).show();

        prevItem.classList.remove('active');
        nextItem.classList.add('active');
        changeActiveLink();
    }
}());

