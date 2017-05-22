var socket = io();

socket.on('connect', (message) => {
});

socket.on('newMessage', (message) => {
    console.log('message', message);
    const li = $('<li></li>');
    li.text(`${message.from}: ${message.text}`);

    $('#messages').append(li);
});

$('#message-form').on('submit', (e) => {
   e.preventDefault();

   socket.emit('createMessage', {
       from: 'User',
       text: $('[name=message]').val()
   }, () => {

   });
});