var tab_list = document.querySelectorAll('.coll-tab-btn');
var tab_content = document.querySelectorAll('.coll-bundle-content');
tab_list.forEach(function(em){
    em.addEventListener("click", function (item) {

        tab_list.forEach(function(em){
            em.classList.remove('is--active');
        });

        var _this = item.target;
        if (_this.classList.contains("coll-tab-btn")){
            var data_id = _this.getAttribute('data-id');
            _this.classList.add('is--active');
        }else{
            var data_id = _this.closest('.coll-tab-btn').getAttribute('data-id');
            _this.closest('.coll-tab-btn').classList.add('is--active');
        }

        tab_content.forEach(function(em){
            em.classList.remove('is--active');
        });

        document.querySelector('.coll-bundle-content[data-id="'+data_id+'"]').classList.add('is--active');
        
    });
});


var bundle_slider = document.querySelectorAll('.collection-bundle-slider');
bundle_slider.forEach(function(slider){
    var swiper = new Swiper(slider, {
        slidesPerView: 1.2,
        spaceBetween: 14,
        loop:true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            500: {
              slidesPerView: 2,
              spaceBetween: 14,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
        },
    });
});


var prev_btn = document.querySelector('.slider-btn-list .button-prev-wrap');
var next_btn = document.querySelector('.slider-btn-list .button-next-wrap');

prev_btn.addEventListener("click", function (item) {
    var _this = item.target;
    if (_this.classList.contains("button-prev-wrap")){
        var _this_prev_btn = _this.target;
    }else{
        var _this_prev_btn = _this.closest('.button-prev-wrap');
    }
    var _this_prev_btn = _this_prev_btn.closest('.collection-bundle').querySelector('.collection-bundle-body').querySelector('.coll-bundle-content.is--active').querySelector('.swiper-button-prev');
    _this_prev_btn.dispatchEvent(new Event('click'));
});

next_btn.addEventListener("click", function (item) {
    var _this = item.target;
    if (_this.classList.contains("button-next-wrap")){
        var _this_next_btn = _this.target;
    }else{
        var _this_next_btn = _this.closest('.button-next-wrap');
    }
    var _this_next_btn = _this_next_btn.closest('.collection-bundle').querySelector('.collection-bundle-body').querySelector('.coll-bundle-content.is--active').querySelector('.swiper-button-next');
    _this_next_btn.dispatchEvent(new Event('click'));
});




      