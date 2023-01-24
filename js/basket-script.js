$('.minus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());

    if (value > 1) {
        value = value - 1;
    } else {
        value = 1;
    }

$input.val(value);

});

$('.plus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());

    if (value < 100) {
      value = value + 1;
    } else {
        value =100;
    }

    $input.val(value);
});

$('.like-btn').on('click', function() {
$(this).toggleClass('is-active');
});
let widthH = screen.width
if(widthH > 768){
    $('.basket__im').click(function(){
    $('.shopping').toggleClass('on')
    $('.shopping-cart').toggleClass('on')
})
$('.shopping').on('click', function(){
    $('.shopping').toggleClass('on')
    $('.shopping-cart').toggleClass('on')
})
$('.basket-button').on('click', function(){
    $('.shopping').toggleClass('on')
    $('.shopping-cart').toggleClass('on')
})
}
$(window).resize(function(eventObject){
    let width = $(this).width()
    if(width > 768){
        $('.basket__img').click(function(){
            $('.shopping').toggleClass('on')
            $('.shopping-cart').toggleClass('on')
        })
        $('.shopping').on('click', function(){
            $('.shopping').toggleClass('on')
            $('.shopping-cart').toggleClass('on')
        })
        $('.basket-button').on('click', function(){
            $('.shopping').toggleClass('on')
            $('.shopping-cart').toggleClass('on')
        })
    }
})