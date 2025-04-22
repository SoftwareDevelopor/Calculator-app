// const mathjsSimpleIntegral = require('mathjs-simple-integral');
// const { math } = require('mathjs/lib/expression/node/FunctionNode');

let scientific = document.querySelector(".main .scientificCalc")
let arrowbutton = document.querySelector(".scientificCalc .arrowbtn ")
arrowbutton.addEventListener("click", () => {
    scientific.classList.toggle('showdiv');
    if (arrowbutton.lastElementChild.lastElementChild.className == "fa-solid fa-arrow-right") {
        arrowbutton.lastElementChild.lastElementChild.className = "fa-solid fa-arrow-left";
    }
    else {
        arrowbutton.lastElementChild.lastElementChild.className = "fa-solid fa-arrow-right";
    }
})



let tempresult = document.querySelector(".main #FormInputs #tempResultStorage");
let forminput = document.querySelector(".main #FormInputs #expressionInput");
let formbtn = document.querySelectorAll(".main .Inputbtns button")

function calculate() {
    let Input=forminput.value;
    try{
        let result=math.evaluate(Input);
        tempresult.value=result;
    }   
    catch(error){
        console.log(error)
    } 

}

function appendToInput(value){
    forminput.value+=value;
}

function cancelInput() {
    forminput.value = '';
    tempresult.value=''

}


function deleteItem() {
    forminput.value = forminput.value.substr(0, forminput.value.length - 1);
}
