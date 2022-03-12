window.addEventListener('scroll', () => {
  if(document.querySelector('html').scrollTop > 150) { 
    //scrollTop이 150에 부터 보임
    document.querySelector('#go_top').style.display = 'block';
  } else {
    document.querySelector('#go_top').style.display = 'none';
  }
});

document.querySelector('#go_top').addEventListener('click', (e) => {
  e.preventDefault(); //기본 특성 삭제 
  scrollTo({
    top:0 ,
    behavior: "smooth"
    });
});