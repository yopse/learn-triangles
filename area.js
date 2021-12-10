var sides = document.querySelectorAll(".sideinput");

var areaBtn = document.querySelector(".area");

var outputBox = document.querySelector("#output");

function calculateArea(a,b)
{
   var calculatedArea = (1/2*a*b);
    

  return calculatedArea;
}


function calculateAreaC() {
 
    
const cala = calculateArea(Number(sides[0].value),Number(sides[1].value));



 outputBox.innerText = "The area of triangle is " + cala;

}


areaBtn.addEventListener('click',calculateAreaC)

