var quizForm = document.querySelector(".quizForm");

var submitAnswerBtn = document.querySelector("#submitanswerbtn");

var output = document.querySelector("#output");



var correctAnswers = ["90°","one right angle","0","75°","3","0","250cm","180°"];


 
function calculateScore()
{

    var score = 0;
    var index = 0;


     var formResults = new FormData(quizForm)
   
     for(let value of formResults.values())
     {
         if(value === correctAnswers[index])
         {
             score++;
         }
         index = index+1;
     }
 
      output.innerText = "Your score is " + score;
     
     

}


submitAnswerBtn.addEventListener('click', calculateScore);




