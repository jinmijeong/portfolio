 /* menu */

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

    $(document).ready(function() {
        $('.menu-btn').click(function() {
            t1.reversed(!t1.reversed());
            $('.menu ul').fadeToggle();
        })
    })


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