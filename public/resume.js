// js to handle buttons in message modal

$('#exampleModal').on('show.bs.modal', function (event){
    var button = $(event.relatedTarget); //Button that triggered the modal
    var recipient = button.data('whatever'); // Extract info from data-* attributes
    // Update the modal's content
    var modal = $(this);
    modal.find('.modal-title').text('New message to ' + recipient);
    modal.find('.modal-body input').val(recipient);
});

$('#sendMessage').on('click', function (event){
    var contents = $('#message-text').val();
    console.log(contents);
});

var link = anime ({
   targets: '#blueButtons',
    translateY: [
        {value: -100, duration: 800},
        {value: 0, duration: 500}
    ],
    rotate: {
        value: '1turn',
    },
    easing: 'easeInOutQuad',
    autoplay: true
});
//document.querySelector('.photo').onmouseover = link.play;


// var git = anime ({
//   targets: '.git',
//   translateY: [
//         {value: -150, duration: 800},
//         {value: 0, duration: 500}
//   ],
//   translateX: [
//         {value: -150, duration: 800},
//         {value: 0, duration: 500}
//   ],
//   rotate: {
//         value: '1turn',
//   },
//     easing: 'easeInOutQuad',
//     autoplay: false,
// });
// document.querySelector('.photo').onmouseover = git.play, link.play;


// var resume = anime ({
//   targets: '.resume',
//   translateY: [
//         {value: -350, duration: 1000},
//         {value: 0, duration: 750}
//   ],
//   translateX: [
//         {value: -50, duration: 1000},
//         {value: 0, duration: 750}
//   ],
//   rotate: {
//         value: '2turn',
//   },
//     easing: 'easeInOutQuad',
//     autoplay: false,

// });
//document.querySelector('.projectButton').onmouseover = resume.play;


