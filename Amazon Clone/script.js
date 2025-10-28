let allImgs = document.querySelectorAll('.list img');
let prevBtn = document.querySelector('.prev-btn');
let nextBtn = document.querySelector('.next-btn');
let n = 0;
function changeSlide(){
  for(i=0;i<allImgs.length;i++){
    allImgs[i].style.display = 'none';
  }
  allImgs[n].style.display='block';
}
changeSlide();
prevBtn.addEventListener('click',()=>{
  if(n > 0){
   n--;
  }
  else{
    n = allImgs.length -1;
  }
  changeSlide();
})
nextBtn.addEventListener('click',()=>{
  if(n < allImgs.length -1){
    n++;
  }
  else{
    n=0;
  }
  changeSlide();
})
const scrollContainer = document.querySelectorAll('.products');
for(const item of scrollContainer){
  item.addEventListener('wheel',(evt)=>{
    evt.preventDefault();;
    item.scrollLeft += evt.deltaY;
    item.scrollLeft += evt.deltaX;
  })
}