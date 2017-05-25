(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

window.onload = function () {
    var cta = document.querySelector('.m-list-cta'),
        items = document.querySelectorAll('.m-list__item'),
        links = document.querySelectorAll('.m-list a'),
        index = Math.round(Math.random() * items.length - 1);

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
    });

    [].forEach.call(links, function (link) {
        link.setAttribute('target', '_blank');
    });

    document.querySelector('.m-header__title a').href = 'mailto:sebastiano@toiletpapermagazine.com';
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJfc3JjL2pzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLE9BQU8sTUFBUCxHQUFnQixZQUFXO0FBQ3ZCLFFBQUksTUFBTSxTQUFTLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBVjtBQUFBLFFBQ0ksUUFBUSxTQUFTLGdCQUFULENBQTBCLGVBQTFCLENBRFo7QUFBQSxRQUVJLFFBQVEsU0FBUyxnQkFBVCxDQUEwQixXQUExQixDQUZaO0FBQUEsUUFHSSxRQUFRLEtBQUssS0FBTCxDQUFXLEtBQUssTUFBTCxLQUFjLE1BQU0sTUFBcEIsR0FBMkIsQ0FBdEMsQ0FIWjs7QUFLQSxVQUFNLEtBQU4sRUFBYSxTQUFiLENBQXVCLEdBQXZCLENBQTJCLE1BQTNCOztBQUVBLFFBQUksZ0JBQUosQ0FBcUIsT0FBckIsRUFBOEIsYUFBSztBQUMvQixVQUFFLGNBQUY7QUFDQSxjQUFNLEtBQU4sRUFBYSxTQUFiLENBQXVCLE1BQXZCLENBQThCLE1BQTlCO0FBQ0EsWUFBRyxTQUFPLE1BQU0sTUFBTixHQUFhLENBQXZCLEVBQTBCO0FBQ3RCLG9CQUFRLENBQVI7QUFDSCxTQUZELE1BRU87QUFDSDtBQUNIOztBQUVELGNBQU0sS0FBTixFQUFhLFNBQWIsQ0FBdUIsR0FBdkIsQ0FBMkIsTUFBM0I7QUFDSCxLQVZEOztBQVlBLE9BQUcsT0FBSCxDQUFXLElBQVgsQ0FBZ0IsS0FBaEIsRUFBc0IsZ0JBQVE7QUFDMUIsYUFBSyxZQUFMLENBQWtCLFFBQWxCLEVBQTRCLFFBQTVCO0FBQ0gsS0FGRDs7QUFJQSxhQUFTLGFBQVQsQ0FBdUIsb0JBQXZCLEVBQTZDLElBQTdDLEdBQWtELDJDQUFsRDtBQUNILENBekJEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgY3RhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm0tbGlzdC1jdGEnKSxcbiAgICAgICAgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubS1saXN0X19pdGVtJyksXG4gICAgICAgIGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm0tbGlzdCBhJyksXG4gICAgICAgIGluZGV4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKml0ZW1zLmxlbmd0aC0xKTtcblxuICAgIGl0ZW1zW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gICAgXG4gICAgY3RhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaXRlbXNbaW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgaWYoaW5kZXg9PWl0ZW1zLmxlbmd0aC0xKSB7XG4gICAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmRleCsrOyAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaXRlbXNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICB9KTtcblxuICAgIFtdLmZvckVhY2guY2FsbChsaW5rcyxsaW5rID0+IHtcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm0taGVhZGVyX190aXRsZSBhJykuaHJlZj0nbWFpbHRvOnNlYmFzdGlhbm9AdG9pbGV0cGFwZXJtYWdhemluZS5jb20nO1xufVxuIl19
