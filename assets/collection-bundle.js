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

        document.querySelectorAll('.coll-bundle-content[data-id="'+data_id+'"]').classList.add('is--active');
        
    });
});