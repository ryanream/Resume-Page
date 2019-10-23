anime.timeline({loop: false})
  .add({
    delay: 750,
    // stretch a single
    targets: '.ml5 .line',
    opacity: [0.5,1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 700
  }).add({
    // send line up
    targets: '.ml5 .line',
    duration: 600,
    easing: "easeOutExpo",
    translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
  }).add({
    // send line down
    targets: '.ml5 .ampersand',
    opacity: [0,1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    // send letters left
    targets: '.ml5 .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=300'
  }).add({
    // send letters right
    targets: '.ml5 .letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    // fade out
    targets: '.ml5',
    opacity: .3,
    duration: 4000,
    easing: "easeOutExpo",
    delay: 1000
  });
  
  anime({
    targets: '.thanks',
    opacity: [0,1],
    duration: 1000,
    easing: 'easeOutExpo',
    delay: 3000
  });
  