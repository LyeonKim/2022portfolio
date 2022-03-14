console.log(window.pageYOffset);
// = console.log($(window).scrollTop());

// window.innerWidth 브라우저 내부 너비
// width값을 가져오기
$(window).resize(function () {
  let widthSize = window.innerWidth;

  if (widthSize <= 1080) {
    $('.width').css({'display':'block'});
  } else {
    $('.width').css({'display':'none'});
  }
});


// meun click
$('#open').on('click',()=>{
  $('#gnb').addClass('active');
});
$('#close').on('click',()=>{
  $('#gnb').removeClass('active');
});


// 470~1360  main .video_Wrap #youtube
// youtube 플레이어
$("#youtube").YTPlayer();
let bgFilters = {
  grayscale : 60,
}
$("#youtube").YTPApplyFilters(bgFilters);

// scroll시 사이즈 커지고/ 줄어들기..etc 
addEventListener('scroll', ()=> {
  if( window.pageYOffset < 300 ) {
    $('header').css({'padding-top':'20px','transition':'0.5s'});
    $('.product p').css({'transform':'rotate(15deg)'});
    $('.list_wrap .list ul').css({'height':'100%'});
  } else if( window.pageYOffset > 300 && window.pageYOffset < 920 ) {
    $('header').css({'padding-top':'5px'});
    $('.video_wrap').css({'width':'100%','height':'110vh','margin':'0','transition':'0.3s'});
    $('.main_txt .hide ').css({'width':'100%'});
  } else if (window.pageYOffset > 750 && window.pageYOffset < 1900) {
    $('.video_wrap').css({'width':'94%','height':'104vh','margin':'3vh 3%','transition':'0.3s'});
    $('.main_txt .hide ').css({'width':'0'});
    $('aside h3 .hide').css({'width':'100%'});
  } else if (window.pageYOffset > 1900 && window.pageYOffset <3000) {
    $('.main_txt .hide ').css({'width':'100%'});
    $('aside h3 .hide').css({'width':'0'});
  } else if (window.pageYOffset > 3000 && window.pageYOffset < 3100) {
    $('.product p').css({'transform':'rotate(5deg)'});
  } else if (window.pageYOffset > 3100 && window.pageYOffset < 4300) {
    $('.product p').css({'transform':'rotate(0)'});
    $('aside h3 .hide').css({'width':'100%'});
    $('.list_wrap .list ul').css({'height':'0%'});
  } else if (window.pageYOffset > 4300 ) {
    $('.list_wrap .list ul').css({'height':'100%'});
  } else {
    $('header').css({'padding-top':'5px'});
    $('.product p').css({'transform':'rotate(-3deg)'});
    $('.list_wrap .list ul').css({'height':'100%'});
    $('.video_wrap').css({'width':'94%','height':'104vh','margin':'3vh 3%','transition':'0.3s'}); 
    $('aside h3 .hide').css({'width':'100%'});
  }
});

// .scroll_txt > .txt1 + .txt2
const scroll = document.querySelector('.scroll_txt')
const txt1 = document.querySelector('.txt1')
const txt2 = document.querySelector('.txt2')

addEventListener('scroll',() => {
  txt1.style.transform = `translateX(-${window.pageYOffset}px)`;
  txt2.style.transform = `translateX(${window.pageYOffset}px)`;
});

