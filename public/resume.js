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