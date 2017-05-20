import TweenLite from 'gsap';

// linePage();
// cycleText();

// function linePage(){

//     var splitLines = document.querySelectorAll('.m-list__item');
//     [].forEach.call(splitLines, item => {
//         var text = item.querySelector('a').innerHTML;
//         var output = '';

//         for (var i = 0, len = text.length; i < len; i++) {
//             output += '<span>' + text[i] + '</span>';
//         }

//         item.querySelector('a').innerHTML = output;

//         var prev = 0;
//         var parts = [];

//         [].forEach.call(item.querySelectorAll('a span'), (letter,i) => {
//             if (letter.offsetTop > prev){
//                 parts.push(i);
//                 prev = letter.offsetTop;
//             }
//         });

//         parts.push(text.length);

//         var finalOutput = ''
//         parts.forEach(function(endPoint, i){
//             if (endPoint > 1){
//                 finalOutput += '<span class="line-wrap"><span class="line-inner">' + text.substring(parts[i-1],parts[i]) + '</span></span>';
//             }
//         })

//         item.querySelector('a').innerHTML = finalOutput;
//         item.querySelector('a').classList.add("lined");

//     });
// }


// function cycleText() {
    var index = 0;
    var items = document.querySelectorAll('.m-list__item');

    document.addEventListener('click', (e) => {
        e.preventDefault()
        if(index == 0 ) {
            items[items.length-1].classList.remove('m-list__item--hide');    
            items[items.length-1].classList.remove('m-list__item--show');    
        }
        if(index > 0) {
            // items[items.length-1].classList.remove('m-list__item--hide');    
            items[index-1].classList.remove('m-list__item--show');
            items[index-1].classList.add('m-list__item--hide');    
        }
        if(index > 1) {
            items[index-2].classList.remove('m-list__item--hide');    
        }
        items[index++].classList.add('m-list__item--show');
        if(index == items.length) index = 0;
        console.log(index);
    });

    // setInterval(function(){
    //     [].forEach.call(document.querySelectorAll('.m-list__item'),(el)=>{
    //         el.classList.toggle('m-list__item--show'); 
    //     })
    // }, 4000)

    // setTimeout(function(){
    //     [].forEach.call(document.querySelectorAll('.m-list__item'),(el)=>{
    //         el.classList.toggle('m-list__item--show'); 
    //     })
    // },1000)
  
// }


// window.addEventListener('resize', function(){
//     linePage()
// })