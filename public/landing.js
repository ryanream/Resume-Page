// This code is from https://tobiasahlin.com/moving-letters/

anime.timeline({loop: false})
  .add({
    delay: 750,
    // stretch a single line
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
    // fade Ryan down to 0.3
    // targets: '.ml5',
    // opacity: .3,
    // duration: 4000,
    // easing: "easeOutExpo",
    // delay: 1000
  });
  
  anime.timeline({loop:false})
  .add({
    // fade in thank you message 
    targets: '.thanks',
    opacity: [0,1],
    duration: 2000,
    easing: 'linear',
    delay: 3000
  }).add({
    // fade out 'Ryan' and 'thanks' 
    targets: '.ml5, .thanks',
    opacity: 0,
    duration: 3000,
    easing: 'easeInExpo',
    delay: 2000
  }).add({
    // fade in button
  targets: '.button',
  translateY: { value: -325, duration: 2000, easing: 'easeInOutBack'},
  opacity: {value: 1, duration: 1500, easing: 'linear'},
});
  

   