$(function() {
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        margin: 104,
        loop: true,
        nav: true,
        autoWidth:true,
        navigation : true,
        navigationText : ["prev","next"],
    });

    $('.top-menu__next-btn').click(function() {
        owl.trigger('next.owl.carousel');
    })

    $('.top-menu__prev-btn').click(function() {
        owl.trigger('prev.owl.carousel', [300]);
    })
});

const btnAds1 = document.querySelector('#btn-ads-1');
const btnAds2 = document.querySelector('#btn-ads-2');
const btnNext = document.querySelector('#btn_next');
const btnPrev = document.querySelector('#btn-prev');

btnPrev.addEventListener('mouseover', function (){
    document.getElementById("btn-prev-img").src="./img/top-menu/orange-prev-btn.svg";
});

btnPrev.addEventListener('mouseout', function (){
    document.getElementById("btn-prev-img").src="./img/top-menu/prev-btn.svg";
});

btnNext.addEventListener('mouseover', function (){
    document.getElementById("btn-next-img").src="./img/top-menu/orange-next-btn.svg";
});

btnNext.addEventListener('mouseout', function (){
    document.getElementById("btn-next-img").src="./img/top-menu/next-btn.svg";
});


btnAds1.addEventListener('click', function (){
    btnAds1.classList.remove('announcement__ads-txt_change');
    btnAds2.classList.add('announcement__ads-txt_change');
    document.getElementById("img-ads-1").src="./img/announcement/slider_image_1.jpg";
    document.getElementById("img-ads-2").src="./img/announcement/slider_image_2.jpg";
    document.getElementById("img-ads-3").src="./img/announcement/slider_image_3.png";
    document.getElementById("img-ads-4").src="./img/announcement/slider_image_4.png";

});


btnAds2.addEventListener('click', function (){
    btnAds2.classList.remove('announcement__ads-txt_change');
    btnAds1.classList.add('announcement__ads-txt_change');
    document.getElementById("img-ads-1").src="./img/announcement/slider_image_5.jpg";
    document.getElementById("img-ads-2").src="./img/announcement/slider_image_6.jpg";
    document.getElementById("img-ads-3").src="./img/announcement/slider_image_7.jpg";
    document.getElementById("img-ads-4").src="./img/announcement/slider_image_8.jpg";
});


