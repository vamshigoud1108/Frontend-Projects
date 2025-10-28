let accordionHeader = document.querySelectorAll('.accordion-item');
accordionHeader.forEach((item)=>{
 item.addEventListener('click',()=>{
  console.log('cliedk')
  item.classList.toggle('active');
 })
})