const quesstions =[
    {
        quesstions:"What is Bangladesh national flower?",
        answers:[
            {text:"rose",correct: false},
            {text:"water lily",correct: true},
            {text:"	Daffodil",correct: false},
            {text:"	Tulip",correct: false},
        ],
    },
    {
        quesstions:"What is Bangladesh national animals?",
        answers:[
            {text:" king cobra",correct: false},
            {text:" Doyel",correct: false},
            {text:"	Royal Bengal Tiger",correct: true},
            {text:"	elephants ",correct: false},
        ],
    },
    {
        quesstions:"What is the total border area of Bangladesh?",
        answers:[
            {text:"India 4144 km",correct: false},
            {text:"Marine boundary 711 km",correct: false},
            {text:"	 Bangladesh 5138 km ",correct: true},
            {text:"	Myanmar 283 km",correct: false},
        ],
    },
    {
        quesstions:"How many districts are there in Bangladesh?",
        answers:[
            {text:" 76",correct: false},
            {text:" 45",correct: false},
            {text:"	64",correct: true},
            {text:"85",correct: false},
        ],
    },
    {
        quesstions:"What are the main foods of Bangladesh?",
        answers:[
            {text:" Rice and Fish.",correct: true},
            {text:"  Rice and Meat.",correct: false},
            {text:"	 Fish.",correct: false},
            {text:" Rice and Chikeen.",correct: false},
        ],
    },
    {
        quesstions:"Where is the national museum?",
        answers:[
            {text:"Svar",correct: false},
            {text:"Mirpur",correct: false},
            {text:"Manikgonj",correct: false},
            {text:"Shahbag.",correct: true},
        ],
    },
];
const quesstionsElement=document.getElementById("quesstions");
const answerBtns=document.getElementById("answer-btn");
const nextBtn=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;


function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextBtn.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=quesstions[currentQuestionIndex];
    let quesstionNo=currentQuestionIndex+1;
    quesstionsElement.innerHTML=quesstionNo + "." + currentQuestion.quesstions;
    currentQuestion.answers.forEach(answer => {
   const button =document.createElement("button");
  button.innerHTML=answer.text;
  button.classList.add("btn");
  answerBtns.appendChild(button);


if(answer.correct){
button.dataset.correct=answer.correct;

}



button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextBtn.style.display="none"
    while(answerBtns.firstChild){
        answerBtns.removeChild(answerBtns.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
       score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerBtns.children).forEach(button => {
  if(button.dataset.correct==="true"){
    button.classList.add("correct");
  }
  button.Disabled=true;
    });
nextBtn.style.display="block"
}
function showScore(){
    resetState();
    quesstionsElement.innerHTML=`Your Score ${score} Out of${quesstions.length}!`;
    nextBtn.innerHTML="Play Again";
    nextBtn.style.display="block";
}
function  handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<quesstions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextBtn.addEventListener("click",() =>{
if(currentQuestionIndex<quesstions.length){
    handleNextButton();
}
else{
    //startQuiz(); 
}
});

startQuiz();