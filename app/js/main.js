// Кнопка "Подробная заявка"

$(function () {
    $('#btn_get-price').click(function(e){
        event.preventDefault();
        scrollForm = $('.get_price-block').offset().top;
        $('html, body').animate({scrollTop : scrollForm}, 1000);
    });
});


// Модальное окно "Быстрая заявка"

$(function () {
    var modalBtn = $('.active-btn'),
        modalWindow = $('.modal-bid'),
        close = $('.close-btn');

    modalBtn.on('click', function(){
        modalWindow.toggleClass('modal-bid_active');
    });

    close.on('click', function(){
        modalWindow.toggleClass('modal-bid_active');
    });
});


// Модальное окно "Заказать обратный звонок"

$(function () {
    var modalBtn = $('.modal-phone-btn'),
        modalWindow = $('.modal-phone'),
        close = $('.close-btn-phone');

    modalBtn.on('click', function(){
        event.preventDefault();
        modalWindow.toggleClass('modal-phone_active');
    });

    close.on('click', function(){
        modalWindow.toggleClass('modal-phone_active');
    });
});
