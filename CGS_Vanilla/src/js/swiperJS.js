var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    mousewheel: false,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

swiper.on('slideChange', (sw) => {
    var scrollText = document.getElementById("sliderText");
    var sliderP = document.getElementById("sliderParagraph");

    // Add fade-out animation by updating opacity
    scrollText.style.opacity = 0;

    switch (sw.realIndex) {
        case 0:
            scrollText.innerText = "110 ml jar";
            sliderP.textContent = `Elevate your taste buds to new heights with our 110 ml Chili Garlic Sauce! 
        A harmonious blend of spicy red chilies and pungent garlic, this sauce is a flavor explosion in a bottle.`;
            break;
        case 1:
            scrollText.innerText = "190 ml jar";
            sliderP.textContent = `Spice up your culinary adventures with our 150 ml Chili Garlic Sauce! Crafted with care, 
        this sauce strikes the perfect balance between fiery red chilies and the rich essence of garlic.`;
            break;
        case 2:
            scrollText.innerText = "24 110 ml jars";
            sliderP.textContent = `Ignite the flavor revolution with our Wholesale 110 ml Chili Garlic Sauce 
        - a bundle of 24 bottles to fuel your kitchen creativity!`;
            break;
    }

    // Trigger reflow to apply style changes and then fade in by updating opacity
    void scrollText.offsetWidth;
    void sliderP.offsetWidth;
    scrollText.style.animation = 'fadeIn 2s'; // Apply fadeIn animation
    scrollText.style.opacity = 1;
    sliderP.style.animation = 'fadeIn 2s';
    sliderP.style.opacity =1;
    
    // Remove animation after it completes to ensure it runs on each slide change
    setTimeout(() => {
        scrollText.style.animation = 'none';
        sliderP.style.animation = 'none';

    }, 4000); // Adjust the timeout duration to match the duration of your fadeIn animation
});
