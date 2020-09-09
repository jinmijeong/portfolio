 // menu 

 var t1 = new TimelineMax({
     paused: true
 });

 t1.to('.block', 0.4, {
     width: "100%",
     ease: Power4.easeInOut
 });

 t1.staggerFrom(".menu ul li", 0.5, {
     y: 40,
     opacity: 0,
     ease: Power2.easeOut,
     zIndex: -1,
 }, 0.15);

 t1.reverse();

 $(document).ready(function () {
     $('.menu-btn').click(function () {
         t1.reversed(!t1.reversed());
         $('.menu ul').fadeToggle();
         
     })
 })

// cursor custom
const $bigBall = document.querySelector('.cursor__ball--big');
const $smallBall = document.querySelector('.cursor__ball--small');
const $hoverables = document.querySelectorAll('.hoverable');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener('mouseenter', onMouseHover);
  $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
  TweenMax.to($bigBall, .4, {
    x: e.pageX - 15,
    y: e.pageY - 15
  })
  TweenMax.to($smallBall, .1, {
    x: e.pageX - 5,
    y: e.pageY - 7
  })
}

// Hover an element
function onMouseHover() {
  TweenMax.to($bigBall, .3, {
    scale: 4
  })
}
function onMouseHoverOut() {
  TweenMax.to($bigBall, .3, {
    scale: 1
  })
}
 
 // smooth scroll
 const body = document.body,
     scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0],
     height = scrollWrap.getBoundingClientRect().height - 1,
     speed = 0.04;

 var offset = 0;

 body.style.height = Math.floor(height) + "px";

 function smoothScroll() {
     offset += (window.pageYOffset - offset) * speed;

     var scroll = "translateY(-" + offset + "px) translateZ(0)";
     scrollWrap.style.transform = scroll;

     callScroll = requestAnimationFrame(smoothScroll);
 }

 smoothScroll();