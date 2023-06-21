new Swiper('.actual-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 4.67,
    simulateTouch: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    spaceBetween: 0,
});

new Swiper('.discounts-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    simulateTouch: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    spaceBetween: 0,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
