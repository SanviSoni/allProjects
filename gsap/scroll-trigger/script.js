// gsap.from(".page1 #box", {

//     opacity: 0,
//     scale: 0,
//     rotate: 360,
//     durations: 1,
//     delay:1


// })

// gsap.from(".page2 #box", {
//     opacity: 0,
//     rotate: 360,
//     durations:1,
//     delay:1,
//     scrollTrigger: {
//         trigger: ".page2 #box",
//         markers : true,
//         scroller: "body",
//         start :"top 60%",
//         end:"top 20%",
//         scrub: 1
//     }

// })
// //scrub



gsap.to(" .page2 h1", {

    transform: "translateX(-100%)",
    durations: 2,
    scrollTrigger: {
        trigger: ".page2",
        scroller: "body",
        start: "top 0",
        end: "top -100",
        markers: true,
        scrub: 5,
        pin: true

    }

})