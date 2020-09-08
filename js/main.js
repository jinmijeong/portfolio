/* loader */
TweenMax.from(".menu-btn", 3, {
    delay: 5,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from(".logo", 3, {
    delay: 5,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

var t2 = new TimelineMax();
var imgWidth = -$('.ring img').width()
var imgHeight = -$('.ring img').height()
t2.from(".ringOne", 4, {
    delay: 0.2,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
}).from(".ringTwo", 4, {
    delay: 0.9,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
}, "-=5").to(".ringOne", 4, {
    delay: 0.2,
    y: '-50%',
    x: '-50%',
    width: '59%',
    ease: Expo.easeInOut
}).to(".ringTwo", 4, {
    delay: 0.9,
    y: '-50%',
    x: '-50%',
    width: '60%',
    ease: Expo.easeInOut
}, "-=5");

TweenMax.staggerFrom('.title_item', 1, {
    ease: Back.easeOut,
    opacity: 0,
    y: 100,
    delay: 6.5,
}, 0.1);