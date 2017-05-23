window.onload = function() {

    var index = 0;

    var cta = document.querySelector('.m-list-cta');
    var items = document.querySelectorAll('.m-list__item');
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
}
