const changes = ['table', 'bricks', 'instagram']
let table = document.querySelectorAll(".card__container");
let num = 1
let filterButton = document.querySelector('.cd-filter-change')
  filterButton.addEventListener('click', () => {
    if(num == changes.length){
        num = 0
        filterButton.style.background = ' transparent url("./images/filter/tableChange.svg") no-repeat center center'
        $('.card__container').removeClass("none")
        $('.card__container__second').addClass('none')
        $('.card__container__third').addClass('none')
        $('.card__container__third').removeClass("on")
        $('.first__desktop__container').removeClass("none")
        $('.cd-gallery').removeClass('third')
        $('.cd-gallery').addClass('first')
    }
    if(num == 1){
      filterButton.style.background = ' transparent url("./images/filter/bricksChange.svg") no-repeat center center'
      $('.card__container__second').removeClass('none')
      $('.card__container__third').removeClass("on")
      $('.cd-gallery').removeClass('first')
      $('.cd-gallery').addClass('second')
      $('.card__container').addClass("none")
      $('.first__desktop__container').addClass("none")
      $('.card__container__third').addClass('none')
      $('.card__container__second').addClass('on')
    }
    if(num == 2){
      filterButton.style.background = ' transparent url("./images/filter/instagramChange.svg") no-repeat center center'
      $('.card__container__third').removeClass("none")
      $('.card__container__second').removeClass('on')
      $('.cd-gallery').removeClass('second')
      $('.cd-gallery').addClass('third')
      $('.first__desktop__container').addClass("none")
      $('.card__container').addClass("none")
      $('.card__container__second').addClass('none')
      $('.card__container__third').addClass('on')
      
    }
    if(!($('.card__container__second').hasClass('on')) && !($('.card__container__third').hasClass('on'))){
      $('.gallery__li').removeClass('third')
    }
    if($('.card__container__second').hasClass('on')){
      $('.gallery__li').addClass('second')
    }
    if($('.card__container__third').hasClass('on')){
      $('.gallery__li').removeClass('second')
      $('.gallery__li').addClass('third')
    }
    num+=1
  });
document.querySelector('#instagramChange').addEventListener('click', () => {
  $('#instagramChange').addClass('on')
  $('#bricksChange').removeClass('on')
  $('#tableChange').removeClass('on')
  $('.card__container__third').removeClass("none")
  $('.card__container__second').removeClass('on')
  $('.cd-gallery')[0].className = 'cd-gallery third'
  $('.first__desktop__container').addClass("none")
  $('.card__container').addClass("none")
  $('.card__container__second').addClass('none')
  $('.card__container__third').addClass('on')
})
document.querySelector('#bricksChange').addEventListener('click', () => {
  $('#bricksChange').addClass('on')
  $('#instagramChange').removeClass('on')
  $('#tableChange').removeClass('on')
  $('.card__container__second').removeClass('none')
  $('.card__container__third').removeClass("on")
  $('.cd-gallery')[0].className = 'cd-gallery second'
  $('.card__container').addClass("none")
  $('.first__desktop__container').addClass("none")
  $('.card__container__third').addClass('none')
  $('.card__container__second').addClass('on')
})
document.querySelector('#tableChange').addEventListener('click', () => {
  $('#tableChange').addClass('on')
  $('#bricksChange').removeClass('on')
  $('#instagramChange').removeClass('on')
  $('.card__container').removeClass("none")
  $('.card__container__second').addClass('none')
  $('.card__container__third').addClass('none')
  $('.card__container__third').removeClass("on")
  $('.first__desktop__container').removeClass("none")
  $('.cd-gallery')[0].className = 'cd-gallery first'
  $('.card__container__second').removeClass('on')
})