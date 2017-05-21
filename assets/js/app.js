(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// import './vendor/TweenMax.min.js';
// import './vendor/SplitText.min.js';


window.onload = function () {

    // var listItems = document.querySelectorAll('.m-list__item a');

    // var index = 0;

    // var mySplitText = new SplitText(listItems, {type:"lines"});
    // var lines = mySplitText.lines;

    // document.querySelectorAll('.m-list__item')[0].classList.add('show');
    var index = 0;

    var cta = document.querySelector('.m-list-cta');
    var items = document.querySelectorAll('.m-list__item');
    cta.addEventListener('click', function (e) {
        e.preventDefault();
        items[index].classList.remove('show');
        if (index == items.length - 1) {
            index = 0;
        } else {
            index++;
        }

        items[index].classList.add('show');
    });
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJfc3JjL2pzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0NBO0FBQ0E7OztBQUdBLE9BQU8sTUFBUCxHQUFnQixZQUFXOztBQUV2Qjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsUUFBSSxRQUFRLENBQVo7O0FBRUEsUUFBSSxNQUFNLFNBQVMsYUFBVCxDQUF1QixhQUF2QixDQUFWO0FBQ0EsUUFBSSxRQUFRLFNBQVMsZ0JBQVQsQ0FBMEIsZUFBMUIsQ0FBWjtBQUNBLFFBQUksZ0JBQUosQ0FBcUIsT0FBckIsRUFBOEIsYUFBSztBQUMvQixVQUFFLGNBQUY7QUFDQSxjQUFNLEtBQU4sRUFBYSxTQUFiLENBQXVCLE1BQXZCLENBQThCLE1BQTlCO0FBQ0EsWUFBRyxTQUFPLE1BQU0sTUFBTixHQUFhLENBQXZCLEVBQTBCO0FBQ3RCLG9CQUFRLENBQVI7QUFDSCxTQUZELE1BRU87QUFDSDtBQUNIOztBQUVELGNBQU0sS0FBTixFQUFhLFNBQWIsQ0FBdUIsR0FBdkIsQ0FBMkIsTUFBM0I7QUFDSCxLQVZEO0FBV0gsQ0F6QkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXG4vLyBpbXBvcnQgJy4vdmVuZG9yL1R3ZWVuTWF4Lm1pbi5qcyc7XG4vLyBpbXBvcnQgJy4vdmVuZG9yL1NwbGl0VGV4dC5taW4uanMnO1xuXG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgIC8vIHZhciBsaXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubS1saXN0X19pdGVtIGEnKTtcblxuICAgIC8vIHZhciBpbmRleCA9IDA7XG5cbiAgICAvLyB2YXIgbXlTcGxpdFRleHQgPSBuZXcgU3BsaXRUZXh0KGxpc3RJdGVtcywge3R5cGU6XCJsaW5lc1wifSk7XG4gICAgLy8gdmFyIGxpbmVzID0gbXlTcGxpdFRleHQubGluZXM7XG5cbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubS1saXN0X19pdGVtJylbMF0uY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgIHZhciBpbmRleCA9IDA7XG5cbiAgICB2YXIgY3RhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm0tbGlzdC1jdGEnKTtcbiAgICB2YXIgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubS1saXN0X19pdGVtJyk7XG4gICAgY3RhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaXRlbXNbaW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgaWYoaW5kZXg9PWl0ZW1zLmxlbmd0aC0xKSB7XG4gICAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmRleCsrOyAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaXRlbXNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICB9KTtcbn1cbiJdfQ==
