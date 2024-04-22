// gsap.from('h1', {
//     y: -20,
//     delay: 0.5,
//     durations: 2,
//     opacity: 0,

// })

// gsap.from('h3', {

//     y: -20,
//     delay: 1.5,
//     durations: 2,
//     opacity: 0,
//     stagger: 0.3
// })


// gsap.from('i',{
//     y: 20,
//     durations:1,
//     repeat:-1,
//     yoyo:true,

// })

// /////////////////////////////////////////////////////

var tl = gsap.timeline()

tl.from('.nav-1', {

    y: -50,
    durations: 1,
    delay: 0.8
})


tl.from('.nav-2', {
    y: -50,
    durations: 1,
    scale: 1.5
})

tl.from('.nav-3', {
    y: -40,
    durations: 0.5,
    stagger: 0.5
})

tl.from('#h1', {
    opacity: 0,
    durations: 1,
    scale: 1.5,
   

})


tl.from('img', {
    rotate: 360,
    durations: 2,
    delay: 0.3,
    stagger: 0.8,
    opacity: 0,

})




