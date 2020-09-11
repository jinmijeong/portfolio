// about background
TweenMax.from('.about_bg', 2, {
    opacity: 0,
    delay: 0.5
})

TweenMax.from('.about_circle', 2, {
    opacity: 0,
    delay: 2,
    y:50
})
TweenMax.to('.about_circle img',10,{
    rotation:360, 
    repeat:-1, 
    ease:Linear.easeNone
})


function touches(e) {
    var x = e.touches ? e.touches[0].clientX : e.clientX,
        y = e.touches ? e.touches[0].clientY : e.clientY;
    var w = window.innerWidth / 2;
    var h = window.innerHeight / 2;

    var l = -(x - w) / (w / 10) - 10;
    var t = -(y - h) / (h / 10) - 10;
    //10 / (y - (h / 2)) * 100;             
    console.log(y + ' | ' + h + ' | ' + t);

    TweenMax.to($('.about_bg'), 1, {
        top: t + "%",
        left: l + "%"
    });

}

window.addEventListener("mousemove", touches);
window.addEventListener("touchstart", touches);
window.addEventListener("touchmove", touches);


// animation
const textrev = gsap.timeline();

            textrev.from(".line span",2, {
                y: 200,
                ease: "power4.out",
                delay: 1.2,
                skewY: 10,
                stagger: {
                    amount: 2,
                },
            });