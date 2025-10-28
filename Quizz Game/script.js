let timerInfo = document.querySelector('.timer span');
let qustnElem = document.getElementById('qustn');
let ansList = document.querySelector('ul');
let nextBtn = document.querySelector('button');
let currentQuestionIndex = 0;
let score = 0;
function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = 'Next';
  nextBtn.style.display = 'none';
  showQuestion();
}
//Display Question and Answers form an array
function showQuestion(){
  let currentQustn = qustns_list[currentQuestionIndex];
  let qustnNo = currentQuestionIndex + 1;
  qustnElem.innerHTML = `${qustnNo}. ${currentQustn.question}`;
  currentQustn.answers.forEach((answer)=>{
    let li = document.createElement('li');
    li.innerHTML = answer;
    ansList.appendChild(li)
    li.addEventListener('click',(e)=>{
      let selectedLi = e.target;
      let userAns = e.target.textContent;
      let correctAns = currentQustn.correct_answer;
      if(userAns.toLowerCase() == correctAns.toLowerCase()){
        selectedLi.style.backgroundColor = '#9aeabc';
        score++;
      }
      else{
        selectedLi.style.backgroundColor = '#ff9393';
      }
      Array.from(ansList.children).forEach(obj => {
        if(obj.textContent.toLowerCase == correctAns.toLowerCase()){
          obj.style.backgroundColor = '#9aeabc';
        }
        console.log(obj);
        obj.classList.add('disable');
      })
      nextBtn.style.display = 'inline-block';
    })
  })
}
startQuiz();

nextBtn.addEventListener('click',()=>{
  if(currentQuestionIndex < qustns_list.length){
    handleNextBtn();
  }
  else{
    startQuiz();
  }
})
//Next Button Functionality
function handleNextBtn(){
  ansList.innerHTML = '';
  currentQuestionIndex++;
  if(currentQuestionIndex < qustns_list.length ){
    showQuestion();
    nextBtn.style.display = 'none';
  }
  else{
    showScore();
  }
}
//Show Score
function showScore(){
  resetState();
  qustnElem.innerHTML = `You Scored ${score} out of ${currentQuestionIndex}`;
  nextBtn.innerHTML = 'Play Again';
  nextBtn.style.display = 'inline-block';
}
//Reset Functionality
function resetState(){
  while(ansList.firstChild){
   ansList.removeChild(ansList.firstChild);
  }
}
