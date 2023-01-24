$('.menu__btn').click(function() {
    $('.menu').toggleClass('on')
    $('.menu__pop').toggleClass('on')
})
$('.menu__pop').click(function() {
    $('.menu').toggleClass('on')
    $('.menu__pop').toggleClass('on')
})

function foo(){
    let invs = document.querySelectorAll("#inv")
        for(i=0; i<invs.length;i++){
        invs[i].click()
    }
}
setTimeout(foo, 500)