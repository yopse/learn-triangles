var inputs = document.querySelectorAll(".angleinput");

var triangleBtn = document.querySelector("#triangleBtn");

var output = document.querySelector("#output");

function calculateSumOfAngles(angle1,angle2,angle3) {
 
    const sumOfAngles = (angle1 + angle2 + angle3);

     return sumOfAngles;
}



function isTriangle() {

      
     const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));


     if(sumOfAngles===180)
     {

        output.innerText="Yay, The angles form a triangle"

     }

     else {

         output.innerText = "oh oh! The angles don't form a triangle";
     }

}
 


triangleBtn.addEventListener('click',  isTriangle)

