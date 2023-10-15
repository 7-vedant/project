Shery.mouseFollower({color: "#000"});

Shery.makeMagnet(".magnet" /* Element to target.*/, {
    //Parameters are optional.
    // ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    // duration: 1,
  });


Shery.hoverWithMediaCircle(".hvr",{videos: ["./2.mp4","./1.mp4"]});

gsap.to(".fleftelem",{
  scrollTrigger:{
    trigger: "#fimages",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 1
  },
  y:"-300%",
  ease: Power1
})

let sections = document.querySelectorAll(".fleftelem");

Shery.imageEffect(".images", {
  style: 5,
  preset: "./img.json",
  config: {onMouse:{value: 1}},
  slideStyle: (setScroll) => {
    sections.forEach(function(section, index){
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 1,
        onUpdate: function(prog){
          
          setScroll(prog.progress+index)
        }  
      })
    })
  }
});

