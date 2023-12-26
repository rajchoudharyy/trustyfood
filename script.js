var tl = gsap.timeline()
tl.from("#page1 h1", {
    delay: .4,
    opacity: 0,
    duration: .7,
    y: 10
})

tl.from("#img1", {
    delay: .4,
    opacity: 0,
    duration: .5,
    y: 60
})

tl.from("#img2", {
    delay: .4,
    opacity: 0,
    duration: .5,
    y: -80
})

tl.from("#img3", {
    delay: .4,
    opacity: 0,
    duration: .5,
    y: 60
})


gsap.from('#page2 h5, #page2 h1', {
    duration: 1,
    opacity:0,
    x: 200,
    scrollTrigger: {
        trigger: "#page2 h5, #page2 h1 , #page2 button",
        scroll: "body",
        start: "top 70%",
        end: "bottom 10%",
        scrub: 2, 
        // markers:true
    },
})

gsap.from('#page2 button', {
    duration: 1,
    opacity:0,
    y: 200,
    scrollTrigger: {
        trigger: "#page2 h5, #page2 h1 , #page2 button",
        scroll: "body",
        start: "top 70%",
        end: "bottom 10%",
        scrub: 2,
    },
})



gsap.from('#page3',{
    duration:.9,
    delay:1,
    scrollTrigger: {
        trigger: "#page3",
        scroll: "body",
        start: "top 0%",
        end: "bottom 10%",
        scrub: 2, 
        pin:true,
    },

})


gsap.from('#page3 .card',{
    duration: 3,
    opacity:0,
    y: 200,
    scrollTrigger: {
        trigger: "#page3",
        scroll: "body",
        start: "top 0%",
        end: "bottom 10%",
        scrub: 2, 
    },

})



gsap.from('#dev',{
    duration: 1,
    opacity:0,
    x: 200,
    scrollTrigger: {
        trigger: "#dev",
        scroll: "body",
        start: "top 50%",
        end: "bottom 10%",
        // markers:true,
        scrub: 2, 
    },
})


gsap.from('.slides1',{
    duration: 1,
    opacity:0,
    x: -100,
    scrollTrigger: {
        trigger: ".slides1",
        scroll: "body",
        start: "top 60%",
        end: "bottom 60%",
        // markers:true,
        scrub: 1, 
    },
})

gsap.from('.slides2',{
    duration: 1,
    opacity:0,
    x: 100,
    scrollTrigger: {
        trigger: ".slides2",
        scroll: "body",
        start: "top 60%",
        end: "bottom 60%",
        // markers:true,
        scrub: 1, 
    },
})
