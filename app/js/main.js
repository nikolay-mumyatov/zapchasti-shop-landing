// Кнопка "Подробная заявка"

$(function () {
    $('#btn_get-price').click(function(e){
        event.preventDefault();
        scrollForm = $('.get_price-block').offset().top;
        $('html, body').animate({scrollTop : scrollForm}, 1000);
    });
});

// Модальное окно "Быстрая заявка"

