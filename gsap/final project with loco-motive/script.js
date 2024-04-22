

gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});






// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();












function page1Animation() {

    gsap.to('#page-one-video', {

        filter: 'blur(20px)',
        transform: 'scaleX(0.85)',

        scrollTrigger: {

            trigger: '.page1',
            scroller: '.main',
        
            start: "top 0",
            end: "top -50%",
            scrub: true

        }


    })


    document.addEventListener('mousemove', function (dets) {

        gsap.to('.cursor', {
            top: dets.y,
            left: dets.x,
            duration: 1
        })
    })


    gsap.to('.nav-part-2', {
        y: -100,
        duration: 1,
        scrollTrigger: {
            trigger: ".nav-bar",
            scroller: ".main",
            start: "top 0",
            end: "top -10%",
            scrub: true
        }

    })


    gsap.to('.nav-bar i', {

        display: 'block',
        scrollTrigger: {
            trigger: '.nav-bar',
            scroller: '.main',
            start: 'top -15%',
            end: 'top -20%',
            scrub: true

        }
    })

}

page1Animation();



function page2Animation() {
    gsap.to('.page2 img', {

        transform: 'translateY(-50%) translateX(69%)',
        duration: 10,
        repeat: -1,
        ease: 'none',

    })
}

page2Animation();


function page3Animation() {

    var page3Video = document.querySelector('#vid-1');

    page3Video.addEventListener('mouseenter', function () {

        gsap.to('#vid-1', {
            scale: 1.1,
            duration: 1
        })

    })

    page3Video.addEventListener('mouseleave', function () {

        gsap.to('#vid-1', {
            scale: 1,
            duration: 1
        })

    })



    var tl2 = gsap.timeline({

        scrollTrigger: {

            trigger: '#heading1',
            scroller: '.main',
            start: 'top 50%',
            end: 'top -10%',
            scrub: true



        }
    })


    tl2.from('#heading1', {

        y: 10,
        opacity: 0,
        scale: 1.15,
        duration: 0.8

    }, 'lily')

    tl2.from('#p3', {

        y: 10,
        opacity: 0,
        scale: 1.15,
        duration: 0.8

    }, 'lily')

    tl2.from('.page3-left-content button', {

        y: 10,
        opacity: 0,
        scale: 1.15,
        duration: 0.8


    }, 'lily')

    tl2.from('#vid-1', {

        y: 10,
        opacity: 0,
        scale: 1.15,
        duration: 0.8



    }, 'lily')


}


page3Animation();



function page4Animation() {


    var tl3 = gsap.timeline({

        scrollTrigger: {

            trigger: '#pg4-b1',
            scroller: '.main',
            start: 'top 90%',
            end: 'top -200%',
            scrub: true,
            // markers: true
        }
    })

    tl3.from('#pg4-b1', {

        y: 10,
        opacity: 0,
        scale: 1.15,
        duration: 0.6,

    })


    tl3.from('.page4-content-box1  p', {
        y: 10,
        opacity: 0,
        scale: 1.15,
        duration: 0.6,
    })

    tl3.from('.page4-content-box1 button', {
        y: 10,
        opacity: 0,
        scale: 1.15,
        duration: 0.6,
    })

    tl3.from('.page4-content-box2  h5', {

        y: 10,
        opacity: 0,
        scale: 1.15,
        duration: 0.8,

    }, 'v1')

    tl3.from('.page4-content-box2 video', {
        y: 20,
        opacity: 0,
        scale: 1.15,
        duration: 0.8,
    }, 'v1')


    tl3.from('.page4-content-box3 h5', {
        y: 20,
        opacity: 0,
        scale: 1.15,
        duration: 0.8,
    }, 'v2')

    tl3.from('.page4-content-box3 video', {
        y: 20,
        opacity: 0,
        scale: 1.15,
        duration: 0.8,
    }, 'v2')




    tl3.from('.page4-content-box4 h5', {
        y: 20,
        opacity: 0,
        scale: 1.15,
        duration: 0.8,
    }, 'v3')

    tl3.from('.page4-content-box4 video', {
        y: 20,
        opacity: 0,
        scale: 1.15,
        duration: 0.8,
    }, 'v3')



    tl3.from('.page4-content-box5 h5', {
        y: 20,
        opacity: 0,
        scale: 1.15,
        duration: 0.8,
    }, 'v4')

    tl3.from('.page4-content-box5 video', {
        y: 20,
        opacity: 0,
        scale: 1.15,
        duration: 0.8,
    }, 'v4')

}


page4Animation()





function page5Animation() {



    var tl4 = gsap.timeline({

        scrollTrigger: {

            trigger: '.page5',
            scroller: '.main',
        
            start: 'top 0%',
            end: 'top -70%',
            scrub: 3,
            pin: true,



        }

    })


    tl4.to('.page5-inner-box', {

        transform: 'translateX(-50%)',

    }, 'move')


    tl4.to('.inner-slider', {

        x: 650,

    }, 'move')









}

page5Animation();



function page6Animation() {

    var tl6 = gsap.timeline({


        scrollTrigger: {


            trigger: '.page6',
            scroller: " .main",
            
            start: 'top 40%',
            end: 'top -70%',
            scrub: true,
        }

    })



    tl6.from('.page6 h2', {

        y: 10,
        duration: 0.6,
        opacity: 0,
        scale: 1.15


    })


    tl6.from('.page6-content-inner-box1 p', {


        y: 10,
        duration: 0.6,
        opacity: 0,
        scale: 1.15

    }, 'page6')


    tl6.from('.page6-content-inner-box2 p', {
        y: 10,
        duration: 0.6,
        opacity: 0,
        scale: 1.15

    }, 'page6')


    tl6.from('.inner-box1 h4', {
        y: 10,
        duration: 0.6,
        opacity: 0,
        scale: 1.15,
        stagger: .3

    }, 'page6')


    tl6.from('.fb', {


        scale: 1.40,
        opacity: 0,
        duration: 0.8,

    })


}


page6Animation()


function page7Animation() {

    var tl7 = gsap.timeline({


        scrollTrigger: {

            trigger: '.page7',
            scroller: " .main",
            
            start: 'top 40%',
            end: 'top -70%',
            scrub: true,

        }
    })


    tl7.from('.content-box1 h2', {

        y: 20,
        opacity: 0,
        duration: 0.5,

    }, 'content')

    tl7.from('.content-box1 p', {

        y: 20,
        opacity: 0,
        duration: 0.5,

    }, 'content')

    tl7.from('.content-box2 ', {

        y: 20,
        opacity: 0,
        duration: 0.5,

    }, 'content')


    tl7.from('.cnt', {

        y: 20,
        opacity: 0,
        duration: 0.5,

    })


}

page7Animation()



function page8Animation() {



    var tl8 = gsap.timeline({


        scrollTrigger: {

            trigger: '.page8',
            scroller: " .main",
            start: 'top 50%',
            end: 'top -280%',
            scrub: true,

        }
    })

    tl8.from('.page8-content-box1 h2', {

        y: 20,
        duration: .6,
        scale: 1.15,
        opacity: 0


    }, 'page8')


    tl8.from('.page8-content-box2 h3', {

        y: 20,
        duration: .6,
        scale: 1.15,
        opacity: 0


    }, 'page8')




    tl8.from('.page8-content-box2 p', {

        y: 20,
        duration: .6,
        scale: 1.15,
        opacity: 0


    }, 'page8')




    tl8.from('.outer-box1 h3', {

        y: 20,
        duration: .6,
        scale: 1.15,
        opacity: 0


    }, 'outer-box')


    tl8.from('.outer-box1 p', {

        y: 20,
        duration: .6,
        scale: 1.15,
        opacity: 0

    }, 'outer-box')




    tl8.from('.outer-box2 img', {

        y: 20,
        duration: .6,
        scale: 1.15,
        opacity: 0


    }, 'outer-box')







    document.querySelector('.page8-inner-box').addEventListener('mousemove', function (dets) {

        document.querySelector('.page8-inner-box').style.background = `conic-gradient(at ${dets.x}px ${dets.y}px, rgb(255, 195, 190) 0deg,
    rgb(206, 210, 251) 39.19deg,
    rgb(197, 227, 255) 95.62deg,
    rgb(190, 239, 248) 150.61deg,
    rgb(183, 249, 240) 208.13deg,
    rgb(247, 255, 199) 253.13deg,
    rgb(255, 231, 210) 300deg,
    rgb(255, 214, 206) 328.25deg,
    rgb(255, 195, 190) 360deg )`
    })

}


page8Animation()


function page9Animation() {


    var tl9 = gsap.timeline({

        scrollTrigger: {

            trigger: '.page9-content-box',
            scroller: " .main",
        
            start: 'top 50%',
            end: 'top -100%',
            scrub: true,

        }


    })


    tl9.from('.p9-cb-1 p', {

        y: 20,
        duration: .6,
        scale: 1.15,
        opacity: 0
    }, 'page9')



    tl9.from('.p9-cb-1 h5', {

        y: 20,
        duration: .6,
        scale: 1.15,
        opacity: 0
    }, 'page9')




    tl9.from('.p9-video video', {

        y: 20,
        duration: .6,
        scale: 1.15,
        opacity: 0
    }, 'page9')


}

page9Animation()



function page10Animation() {


    var tl10 = gsap.timeline({

        scrollTrigger: {

            trigger: '.page10',
            scroller: " .main",

            start: 'top 50%',
            end: 'top -100%',
            scrub: true,

        }


    })



    tl10.from('.page10-div1 img', {

        y: 20,
        duration: .6,
        scale: 1.15,
        opacity: 0


    })


    tl10.from('.page10-div2 img', {

        y: 20,
        duration: .6,
        scale: 1.15,
        opacity: 0


    })
}


page10Animation()



var text = "We are brain.space     The brain data company"


var splittedText = text.split("")

var clutter = ""

splittedText.forEach(function(elem){
    clutter += `<span>${elem}</span>`
})

var h1Text = document.querySelector(".page1 h1")
h1Text.innerHTML = clutter