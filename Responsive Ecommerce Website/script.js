let navLinks = document.querySelector('.nav-links');
navLinks.style.maxHeight ='0';
function toggleMenu(){
  if(navLinks.style.maxHeight =='0px'){
    navLinks.style.maxHeight ='200px';
  }
  else{
    navLinks.style.maxHeight ='0';
  }
}
let indicator  = document.querySelector('.indicator');
function Register(){
  loginForm.style.transform = 'translateX(370px)'
  regForm.style.transform = 'translateX(370px)';
  indicator.style.transform = 'translateX(130px)';
}
function Login(){
  loginForm.style.transform = 'translateX(0)'
  regForm.style.transform = 'translateX(0px)'
  indicator.style.transform = 'translateX(0px)';
}
let productImg = document.getElementById('product-img')
let smallImg = document.querySelectorAll('.small-img')
smallImg.forEach((img)=> {
  img.addEventListener('click',()=>{
  productImg.src=img.src;
  })
})