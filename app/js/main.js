// Кнопка "Подробная заявка"

$(function () {
    $('#btn_get-price').click(function (e) {
        event.preventDefault();
        scrollForm = $('.get_price-block').offset().top;
        $('html, body').animate({
            scrollTop: scrollForm
        }, 1000);
        console.log(scrollForm);

    });
});


// Модальное окно "Быстрая заявка"

$(function () {
    var modalBtn = $('.active-btn'),
        modalWindow = $('.modal-bid'),
        close = $('.close-btn');

    modalBtn.on('click', function () {
        modalWindow.toggleClass('modal-bid_active');
    });

    close.on('click', function () {
        modalWindow.toggleClass('modal-bid_active');
    });
});


// Модальное окно "Заказать обратный звонок"

$(function () {
    var modalBtn = $('.modal-phone-btn'),
        modalWindow = $('.modal-phone'),
        close = $('.close-btn-phone');

    modalBtn.on('click', function () {
        event.preventDefault();
        modalWindow.toggleClass('modal-phone_active');
    });

    close.on('click', function () {
        modalWindow.toggleClass('modal-phone_active');
    });
});

// Кнопка наверх

$(function () {
    var upBtn = $('.up-arrow'),
        upTop = $('header').offset().top;

    $(window).scroll(function (event) {
        var top = $(window).scrollTop();

        if (top >= 1362) {
            upBtn.css('visibility', 'visible');
        } else {
            upBtn.css('visibility', 'hidden');
        }
    });

    upBtn.on('click', function () {
        $('html, body').animate({
            scrollTop: upTop
        }, 700);
    });
});