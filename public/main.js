let tl = gsap.timeline({defaults: {ease: "power2.inOut"}})
let sideNavActivator = document.getElementById('activator')

let toggle = false

tl.to('nav', {
    width: "0px",
})
tl.to('#app', {
    marginLeft: "0px"
}, "-=.5")

tl.pause()

sideNavActivator.addEventListener('click', () => {
    toggle = !toggle;
    if(toggle ? tl.play() : tl.reverse())
    return
})

// tl.to('nav', {
//     'clipPath': "ellipse(100% 100% at 50% 50%)"
// }, "-=.5")
// tl.to('nav img', {
//     opacity: 1,
//     transform: 'translateX(0)',
//     stagger: .05
// }, "-=.5")
