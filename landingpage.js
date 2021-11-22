    $(document).ready(function(){
        const navcontent = document.querySelector('.navcontent');
        const closeMenu = document.querySelector('.closeMenu');
        const openMenu = document.querySelector('.openMenu');
       
       $('.hamburger').click(function () {
            $(this).parent().find('.navcontent').toggleClass('active');
       });
        
        $('.slider-hero').slick({
            dots: true,
            infinite: true,
            cssEase: 'linear',
            swipe: true,
        });
       
     }); 