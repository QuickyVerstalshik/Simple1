let parent1 = document.querySelector('#first-parent')
let parent2 = document.querySelector('#second-parent')
let $carouselParent = document.querySelector('#carousel__container');
let $carouselParent2 = document.querySelector('#carousel__container2');


let $carousel1 = document.createElement('div');
    
let str1 = []
let $inner1 = document.createElement('div')
$inner1.innerHTML = `<div class="brands">
<div class="brand__container">
</div>
<button onclick='clickBrand()' id="brand__trigger" class="brand__trigger"></button>
</div>`;    
const myElement1 = document.querySelector('.swiper-wrapper.first');
for (let j = 0; j < myElement1.children.length; j++) {
        str1.unshift(myElement1.children[j].cloneNode(true))
    }
function all__brands(){
    $carouselParent.parentNode.removeChild($carouselParent)
    parent1.appendChild($inner1)
    for (let i = 0; i < str1.length; i++) {
        document.querySelector('.brand__container').insertAdjacentElement('afterbegin', str1[i])
    }
}
function clickBrand(){
    $inner1.parentNode.removeChild($inner1)
    parent1.appendChild($carouselParent)
}
let str2 = []
let $inner2 = document.createElement('div')
    $inner2.innerHTML = `
            <div id="brand" class="brands">
                <div class="brands__container">
                </div>
                <button onclick="clickBrands()" class="brands__trigger"></button>
            </div>`

let $carousel2 = document.querySelector('#carousel__container2').cloneNode(true);
const myElement = document.querySelector('.swiper-wrapper.second');
for (let i = 0; i < myElement.children.length; i++) {
        str2.unshift(myElement.children[i].cloneNode(true))
    }
function all__brands__type(){
    $carouselParent2.parentNode.removeChild($carouselParent2)
    parent2.appendChild($inner2)
    for (let i = 0; i < str2.length; i++) {
        document.querySelector('.brands__container').insertAdjacentElement('afterbegin', str2[i])
    }
}
function clickBrands(){
    $inner2.parentNode.removeChild($inner2)
    parent2.appendChild($carouselParent2)
}
$('.category__container a p').click(function(){
    $('.category__container__buttons').toggleClass('on')
    $('.category__container a p').toggleClass('on')
    if($('.category__container a p').hasClass('on')){
        $('.category__container a p').text('Свернуть')
    } 
    if (!($('.category__container a p').hasClass('on'))){
        $('.category__container a p').text('Показать все')
    }
})
let widthF = screen.width
if(widthF < 768){
    let filter = document.querySelector('#cd-filter-m');
    let filterClone = filter.cloneNode(true);
    let filterParent = document.querySelector('#cd-filter-parent');
    filter.parentNode.removeChild(filter)
    filterParent.appendChild(filterClone)
    document.querySelector('#cd-filter-m').classList.remove('cd-filter-m')
    document.querySelector('#cd-filter-m').classList.add('cd-filter')
}
$(window).resize(function(eventObject){
    let width = $(this).width()
    if(width < 768){
        
        let filter = document.querySelector('#cd-filter-m');
        let filterClone = filter.cloneNode(true);
        let filterParent = document.querySelector('#cd-filter-parent');
        filter.parentNode.removeChild(filter)
        filterParent.appendChild(filterClone)
        document.querySelector('#cd-filter-m').classList.remove('cd-filter-m')
        document.querySelector('#cd-filter-m').classList.add('cd-filter')
}
    if(width > 768){
        let filter = document.querySelector('.cd-filter');
        let filterClone = filter.cloneNode(true);
        let filterParent = document.querySelector('#cd-filter-m-parent');
        filter.parentNode.removeChild(filter)
        filterParent.appendChild(filterClone)
        document.querySelector('#cd-filter-m').classList.remove('cd-filter')
        document.querySelector('#cd-filter-m').classList.add('cd-filter-m')
        $(document).on('click','.cd-filter-trigger', function(){
            triggerFilter(true);
            $('.filter-overlay').toggleClass('on')
        });
        $(document).on('click','.cd-filter .cd-close', function(){
            triggerFilter(false);
            $('.filter-overlay').toggleClass('on')
        });
        $(document).on('click', '.filter-overlay', function(){
            triggerFilter(false);
            $('.filter-overlay').toggleClass('on')
        });
            //open/close lateral filter
            $(document).on('click','.cd-filter-trigger', function(){
                triggerFilter(true);
                $('.filter-overlay').toggleClass('on')
            });
            $(document).on('click','.cd-filter .cd-close', function(){
                triggerFilter(false);
                $('.filter-overlay').toggleClass('on')
            });
            $(document).on('click', '.filter-overlay', function(){
                triggerFilter(false);
                $('.filter-overlay').toggleClass('on')
            });
        
            function triggerFilter($bool) {
                var elementsToTrigger = $([$('.cd-filter-trigger'), $('.cd-filter-m'), $('.cd-tab-filter'), $('.cd-gallery')]);
                elementsToTrigger.each(function(){
                    $(this).toggleClass('filter-is-visible', $bool);
                });
            }
            //close filter dropdown inside lateral .cd-filter 
            $('.cd-filter-block h4').on('click', function(){
                $(this).toggleClass('closed').siblings('.cd-filter-content').slideToggle(300);
            })
            $(".polzunok-5").slider({
                min: 0,
                max: 5000,
                values: [2000, 3000],
                range: true,
                animate: "fast",
                slide : function(event, ui) {    
                    $(".polzunok-input-5-left").val(ui.values[ 0 ]);   
                    $(".polzunok-input-5-right").val(ui.values[ 1 ]);  
                }    
            });
            $(".polzunok-input-5-left").val($(".polzunok-5").slider("values", 0));
            $(".polzunok-input-5-right").val($(".polzunok-5").slider("values", 1));
            $(".polzunok-container-5 input").change(function() {
                var input_left = $(".polzunok-input-5-left").val().replace(/[^0-9]/g, ''),    
                opt_left = $(".polzunok-5").slider("option", "min"),
                where_right = $(".polzunok-5").slider("values", 1),
                input_right = $(".polzunok-input-5-right").val().replace(/[^0-9]/g, ''),    
                opt_right = $(".polzunok-5").slider("option", "max"),
                where_left = $(".polzunok-5").slider("values", 0); 
                if (input_left > where_right) { 
                    input_left = where_right; 
                }
                if (input_left < opt_left) {
                    input_left = opt_left; 
                }
                if (input_left == "") {
                input_left = 0;    
                }        
                if (input_right < where_left) { 
                    input_right = where_left; 
                }
                if (input_right > opt_right) {
                    input_right = opt_right; 
                }
                if (input_right == "") {
                input_right = 0;    
                }    
                $(".polzunok-input-5-left").val(input_left); 
                $(".polzunok-input-5-right").val(input_right); 
                if (input_left != where_left) {
                    $(".polzunok-5").slider("values", 0, input_left);
                }
                if (input_right != where_right) {
                    $(".polzunok-5").slider("values", 1, input_right);
                }
            });
            
            
            $(".polzunok-4").slider({
                min: 0,
                max: 4000,
                values: [2000, 3000],
                range: true,
                animate: "fast",
                slide : function(event, ui) {    
                    $(".polzunok-input-4-left").val(ui.values[ 0 ]);   
                    $(".polzunok-input-4-right").val(ui.values[ 1 ]);  
                }    
            });
            $(".polzunok-input-4-left").val($(".polzunok-4").slider("values", 0));
            $(".polzunok-input-4-right").val($(".polzunok-4").slider("values", 1));
            $(".polzunok-container-4 input").change(function() {
                var input_left = $(".polzunok-input-4-left").val().replace(/[^0-9]/g, ''),    
                opt_left = $(".polzunok-4").slider("option", "min"),
                where_right = $(".polzunok-4").slider("values", 1),
                input_right = $(".polzunok-input-4-right").val().replace(/[^0-9]/g, ''),    
                opt_right = $(".polzunok-4").slider("option", "max"),
                where_left = $(".polzunok-4").slider("values", 0); 
                if (input_left > where_right) { 
                    input_left = where_right; 
                }
                if (input_left < opt_left) {
                    input_left = opt_left; 
                }
                if (input_left == "") {
                input_left = 0;    
                }        
                if (input_right < where_left) { 
                    input_right = where_left; 
                }
                if (input_right > opt_right) {
                    input_right = opt_right; 
                }
                if (input_right == "") {
                input_right = 0;    
                }    
                $(".polzunok-input-4-left").val(input_left); 
                $(".polzunok-input-4-right").val(input_right); 
                if (input_left != where_left) {
                    $(".polzunok-4").slider("values", 0, input_left);
                }
                if (input_right != where_right) {
                    $(".polzunok-4").slider("values", 1, input_right);
                }
            });
            
            
            $(".polzunok-3").slider({
                min: 0,
                max: 4000,
                values: [2000, 3000],
                range: true,
                animate: "fast",
                slide : function(event, ui) {    
                    $(".polzunok-input-3-left").val(ui.values[ 0 ]);   
                    $(".polzunok-input-3-right").val(ui.values[ 1 ]);  
                }    
            });
            $(".polzunok-input-3-left").val($(".polzunok-3").slider("values", 0));
            $(".polzunok-input-3-right").val($(".polzunok-3").slider("values", 1));
            $(".polzunok-container-3 input").change(function() {
                var input_left = $(".polzunok-input-3-left").val().replace(/[^0-9]/g, ''),    
                opt_left = $(".polzunok-3").slider("option", "min"),
                where_right = $(".polzunok-3").slider("values", 1),
                input_right = $(".polzunok-input-3-right").val().replace(/[^0-9]/g, ''),    
                opt_right = $(".polzunok-3").slider("option", "max"),
                where_left = $(".polzunok-3").slider("values", 0); 
                if (input_left > where_right) { 
                    input_left = where_right; 
                }
                if (input_left < opt_left) {
                    input_left = opt_left; 
                }
                if (input_left == "") {
                input_left = 0;    
                }        
                if (input_right < where_left) { 
                    input_right = where_left; 
                }
                if (input_right > opt_right) {
                    input_right = opt_right; 
                }
                if (input_right == "") {
                input_right = 0;    
                }    
                $(".polzunok-input-3-left").val(input_left); 
                $(".polzunok-input-3-right").val(input_right); 
                if (input_left != where_left) {
                    $(".polzunok-3").slider("values", 0, input_left);
                }
                if (input_right != where_right) {
                    $(".polzunok-3").slider("values", 1, input_right);
                }
            });
        
     
        
    
    }
});

    

$('.show-all').click(function(){
    this.classList.add('on')
    this.parentNode.classList.add("ul");
})



