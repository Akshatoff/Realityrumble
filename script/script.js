const abouthead = document.getElementById("heading")



document.addEventListener("DOMContentLoaded", function(){
    window.onload = function() {
        var shadowRoot = document.querySelector('spline-viewer').shadowRoot;
        shadowRoot.querySelector('#logo').remove();
       
        
        
        
    }
    
})


gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger)

const loadtext = gsap.timeline({
    defaults: {
        opacity: 1,
        transformOrigin: "center",
        ease: "power4.out"
    }
})
.to(".first", {}, 0)
.to(".second", {}, 0.3)
.to(".third", {}, 0.8)
.to(".fourth", {}, 1.4)
.to(".fifth", {}, 1.9)
.to(".sixth", {}, 2.5)
.to(".seventh", {}, 2.9)
.to(".eigth", {}, 3.1)

const scroll = gsap.timeline({
    scrollTrigger: {
        trigger: "#path",
        scrub: 50,
        start: "10% top",
        end: "150% bottom",
        

    }
})
.to(".car",  {
    
    motionPath: {
        path: "#path",
        align: "#path",
        alignOrigin:[0.5, 0.5],
        

    }, duration: 5
}, 0)
.add(loadtext, 0)


let tl = gsap.timeline({
    
    scrollTrigger: {
        trigger: ".rectangle",
        start: "60% top",
        end: "10% bottom",
        
    }
})

let text = gsap.timeline({
    delay: 1,
    scrollTrigger: {
        trigger: "#heading",
        start: "60% top",
        end: "10% bottom",
        
    }
})



tl.fromTo(  
    ".rectangle",
    {
        scale: 0.1,
        

    },
    {
        scale: 1,
        duration: 2.5,
        ease:"power4.out",
    }
)

text.fromTo(
    "#heading",
    {
        display: "none",
        opacity: 0,
        x: -100,
    },
    {
        display: "block",
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power4.out",
    }

)

text.fromTo(
    "#description",
    {
        display: "none",
        opacity: 0,
        x: 100,
    },
    {
        display: "block",
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power4.out"
    }
)

text.fromTo(
    "#caption",
    {
        display: "none",
        opacity: 0,
        x: -100,
    },
    {
        display: "flex",
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power4.out"
    }
)


// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Listen for the 'scroll' event and log the event data to the console


// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);
