//header .notice .txt 자동 롤링 
const txt = document.querySelectorAll('.notice .txt');
let n = 0;
let runTxt = () => {
  txt.forEach((el)=> {
    el.classList.remove('active');
  });
  setTimeout(() => {
    if(n < txt.length) {
      n++;
    } else {
      n= 0;
    }
  }, 1200);
  txt[n].classList.add('active');
}  
setInterval( runTxt , 1800 );

// header side menu
$('#gnb').on('click', ()=> {
  $('#gnb').toggleClass('active');
  $('.slide_menu').toggleClass('active');
});

// main slide.....
var swiper = new Swiper(".swiper", {
  speed: 600, //속도
  parallax: true,//패럴럭스 효과
  pagination: {
    el: ".swiper-pagination",
    clickable: true, //클릭하면 해당 페이지로 이동
    type: 'fraction' 
  },
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
}); 


// Kakao Map API
var container = document.getElementById('map');
var options = {
  center: new kakao.maps.LatLng(37.558552300669746, 126.85477740613146),
  level: 3,
  mapTypeId : kakao.maps.MapTypeId.ROADMAP
};
var map = new kakao.maps.Map(container, options);         		
// 지도 타입 변경 컨트롤
var mapTypeControl = new kakao.maps.MapTypeControl();
 // 지도의 상단 우측에 지도 타입 변경 컨트롤 추가
 map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
 var zoomControl = new kakao.maps.ZoomControl();
 map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

// 지도 마커
var marker = new kakao.maps.Marker({
  position: new kakao.maps.LatLng(37.558552300669746, 126.85477740613146),
  map: map
});
