(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

window.onload = function () {
    var cta = document.querySelector('.m-list-cta'),
        items = document.querySelectorAll('.m-list__item'),
        links = document.querySelectorAll('.m-list a'),
        hash = window.location.hash.split('#')[1],
        index;

    if (hash === undefined) {
        index = Math.round(Math.random() * items.length - 1);
        window.location.hash = items[index].getAttribute('data-slug');
    } else {
        index = hash;
    }

    items[index].classList.add('show');

    cta.addEventListener('click', function (e) {
        e.preventDefault();
        items[index].classList.remove('show');
        if (index == items.length - 1) {
            index = 0;
        } else {
            index++;
        }

        items[index].classList.add('show');
        window.location.hash = items[index].getAttribute('data-slug');
    });

    window.addEventListener("hashchange", function (e) {
        items[index].classList.remove('show');
        index = window.location.hash.split('#')[1];
        items[index].classList.add('show');
    });

    [].forEach.call(links, function (link) {
        link.setAttribute('target', '_blank');
    });

    document.querySelector('.m-header__title a').href = 'mailto:sebastiano@toiletpapermagazine.com';
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJfc3JjL2pzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLE9BQU8sTUFBUCxHQUFnQixZQUFXO0FBQ3ZCLFFBQUksTUFBTSxTQUFTLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBVjtBQUFBLFFBQ0ksUUFBUSxTQUFTLGdCQUFULENBQTBCLGVBQTFCLENBRFo7QUFBQSxRQUVJLFFBQVEsU0FBUyxnQkFBVCxDQUEwQixXQUExQixDQUZaO0FBQUEsUUFHSSxPQUFPLE9BQU8sUUFBUCxDQUFnQixJQUFoQixDQUFxQixLQUFyQixDQUEyQixHQUEzQixFQUFnQyxDQUFoQyxDQUhYO0FBQUEsUUFJSSxLQUpKOztBQU1BLFFBQUcsU0FBUyxTQUFaLEVBQXVCO0FBQ25CLGdCQUFRLEtBQUssS0FBTCxDQUFXLEtBQUssTUFBTCxLQUFjLE1BQU0sTUFBcEIsR0FBMkIsQ0FBdEMsQ0FBUjtBQUNBLGVBQU8sUUFBUCxDQUFnQixJQUFoQixHQUF1QixNQUFNLEtBQU4sRUFBYSxZQUFiLENBQTBCLFdBQTFCLENBQXZCO0FBQ0gsS0FIRCxNQUdPO0FBQ0gsZ0JBQVEsSUFBUjtBQUNIOztBQUVELFVBQU0sS0FBTixFQUFhLFNBQWIsQ0FBdUIsR0FBdkIsQ0FBMkIsTUFBM0I7O0FBRUEsUUFBSSxnQkFBSixDQUFxQixPQUFyQixFQUE4QixhQUFLO0FBQy9CLFVBQUUsY0FBRjtBQUNBLGNBQU0sS0FBTixFQUFhLFNBQWIsQ0FBdUIsTUFBdkIsQ0FBOEIsTUFBOUI7QUFDQSxZQUFHLFNBQU8sTUFBTSxNQUFOLEdBQWEsQ0FBdkIsRUFBMEI7QUFDdEIsb0JBQVEsQ0FBUjtBQUNILFNBRkQsTUFFTztBQUNIO0FBQ0g7O0FBRUQsY0FBTSxLQUFOLEVBQWEsU0FBYixDQUF1QixHQUF2QixDQUEyQixNQUEzQjtBQUNBLGVBQU8sUUFBUCxDQUFnQixJQUFoQixHQUF1QixNQUFNLEtBQU4sRUFBYSxZQUFiLENBQTBCLFdBQTFCLENBQXZCO0FBQ0gsS0FYRDs7QUFhQSxXQUFPLGdCQUFQLENBQXdCLFlBQXhCLEVBQXNDLGFBQUs7QUFDdkMsY0FBTSxLQUFOLEVBQWEsU0FBYixDQUF1QixNQUF2QixDQUE4QixNQUE5QjtBQUNBLGdCQUFRLE9BQU8sUUFBUCxDQUFnQixJQUFoQixDQUFxQixLQUFyQixDQUEyQixHQUEzQixFQUFnQyxDQUFoQyxDQUFSO0FBQ0EsY0FBTSxLQUFOLEVBQWEsU0FBYixDQUF1QixHQUF2QixDQUEyQixNQUEzQjtBQUNILEtBSkQ7O0FBTUEsT0FBRyxPQUFILENBQVcsSUFBWCxDQUFnQixLQUFoQixFQUFzQixnQkFBUTtBQUMxQixhQUFLLFlBQUwsQ0FBa0IsUUFBbEIsRUFBNEIsUUFBNUI7QUFDSCxLQUZEOztBQUlBLGFBQVMsYUFBVCxDQUF1QixvQkFBdkIsRUFBNkMsSUFBN0MsR0FBa0QsMkNBQWxEO0FBQ0gsQ0F4Q0QiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwid2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubS1saXN0LWN0YScpLFxuICAgICAgICBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tLWxpc3RfX2l0ZW0nKSxcbiAgICAgICAgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubS1saXN0IGEnKSxcbiAgICAgICAgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCcjJylbMV0sXG4gICAgICAgIGluZGV4O1xuXG4gICAgaWYoaGFzaCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGluZGV4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKml0ZW1zLmxlbmd0aC0xKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBpdGVtc1tpbmRleF0uZ2V0QXR0cmlidXRlKCdkYXRhLXNsdWcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpbmRleCA9IGhhc2g7XG4gICAgfVxuXG4gICAgaXRlbXNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICBcbiAgICBjdGEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpdGVtc1tpbmRleF0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgICBpZihpbmRleD09aXRlbXMubGVuZ3RoLTEpIHtcbiAgICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZGV4Kys7ICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpdGVtc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGl0ZW1zW2luZGV4XS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2x1ZycpO1xuICAgIH0pO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsIGUgPT4ge1xuICAgICAgICBpdGVtc1tpbmRleF0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgICBpbmRleCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCcjJylbMV07XG4gICAgICAgIGl0ZW1zW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gICAgfSk7XG5cbiAgICBbXS5mb3JFYWNoLmNhbGwobGlua3MsbGluayA9PiB7XG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX2JsYW5rJyk7XG4gICAgfSlcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tLWhlYWRlcl9fdGl0bGUgYScpLmhyZWY9J21haWx0bzpzZWJhc3RpYW5vQHRvaWxldHBhcGVybWFnYXppbmUuY29tJztcbn1cbiJdfQ==
