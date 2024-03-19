$(function () {
    $('.firstfloor_link').on('click', function () {
        $(this).toggleClass('active');
        $(this).siblings('.secondfloor').stop().slideToggle();
        $(this).parents().siblings().find('.secondfloor').slideUp();
        $(this).parents().siblings().find('.firstfloor_link').removeClass('active');
    });
});

