!function e(t,r,n){function o(a,u){if(!r[a]){if(!t[a]){var c="function"==typeof require&&require;if(!u&&c)return c(a,!0);if(i)return i(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var s=r[a]={exports:{}};t[a][0].call(s.exports,function(e){var r=t[a][1][e];return o(r||e)},s,s.exports,e,t,r,n)}return r[a].exports}for(var i="function"==typeof require&&require,a=0;a<n.length;a++)o(n[a]);return o}({1:[function(e,t,r){"use strict";window.onload=function(){var e=document.querySelector(".m-list-cta"),t=document.querySelectorAll(".m-list__item"),r=document.querySelectorAll(".m-list a"),n=Math.round(Math.random()*t.length-1);t[n].classList.add("show"),e.addEventListener("click",function(e){e.preventDefault(),t[n].classList.remove("show"),n==t.length-1?n=0:n++,t[n].classList.add("show")}),[].forEach.call(r,function(e){e.setAttribute("target","_blank")}),document.querySelector(".m-header__title a").href="mailto:sebastiano@toiletpapermagazine.com"}},{}]},{},[1]);