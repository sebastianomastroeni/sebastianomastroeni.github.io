window.onload = function() {
    var cta = document.querySelector('.m-list-cta'),
        items = document.querySelectorAll('.m-list__item'),
        links = document.querySelectorAll('.m-list a'),
        index = Math.round(Math.random()*items.length-1);

    items[index].classList.add('show');
    
    cta.addEventListener('click', e => {
        e.preventDefault();
        items[index].classList.remove('show');
        if(index==items.length-1) {
            index = 0;
        } else {
            index++;    
        }
        
        items[index].classList.add('show');
    });

    [].forEach.call(links,link => {
        link.setAttribute('target', '_blank');
    })

    document.querySelector('.m-header__title a').href='mailto:sebastiano@toiletpapermagazine.com';
}
