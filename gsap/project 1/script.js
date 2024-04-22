

var menu = document.querySelector(".nav-bar i")

var cross = document.querySelector(".cross")

var tl = gsap.timeline()

tl.to('.full', {
    x: 40,
    durations: .9,
})


tl.from('.full h4', {
    x: 200,
    opacity: 0,
    stagger: 0.4,
    durations: 0.6
})

tl.pause()

menu.addEventListener('click', function(){
    tl.play()
})

cross.addEventListener('click',function(){
    tl.reverse()
})
