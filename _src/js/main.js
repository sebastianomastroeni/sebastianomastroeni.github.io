
// import './vendor/TweenMax.min.js';
// import './vendor/SplitText.min.js';


window.onload = function() {

    // var listItems = document.querySelectorAll('.m-list__item a');

    // var index = 0;

    // var mySplitText = new SplitText(listItems, {type:"lines"});
    // var lines = mySplitText.lines;

    // document.querySelectorAll('.m-list__item')[0].classList.add('show');
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
