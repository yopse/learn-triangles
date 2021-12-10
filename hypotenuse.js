var sides = document.querySelectorAll(".sideinput");

var hypotenuseBtn = document.querySelector("#hypotenuseBtn");

var outputBox = document.querySelector("#output");

function calculateSumOfSquares(a,b)
{
   var sumOfSquares = a*a + b*b;
    

  return sumOfSquares;
}


function calculateHypotenuse() {
 
    
const sumOfSquares= calculateSumOfSquares(Number(sides[0].value),Number(sides[1].value));

var lengthOfHypotenuse = Math.sqrt(sumOfSquares);

 outputBox.innerText = "The length of hypotenuse is " + lengthOfHypotenuse;

}



hypotenuseBtn.addEventListener('click',calculateHypotenuse)

