$('.btn').click(() => {
    $('ul').append(`<li>${$('.todo-text').val()}</li>`);
    console.log($('.todo-text').val());
    $('li:last-child').click((event) => {
        $(event.target).toggleClass('completed');
        
        });
    $('.todo-text').val('');
});






