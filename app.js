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

let Input = "";
formbtn.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerText == "=") {
            calculate();
        }
        else if (e.target.innerText == "sin" || e.target.innerText == "cos" || e.target.innerText == "tan" || e.target.innerText == "log" || e.target.innerText == "ln") {
            Input += e.target.innerText + "(";
            forminput.value = Input;
        }
        else {
            Input = e.target.innerText;
            forminput.value += Input;
        }
    })
})
function calculate() {
    try {
        let result = eval(forminput.value);
        tempresult.value = result;
    } catch (error) {
        tempresult.value = "Error";
    }
}

function sin(){
    let sin = forminput.value;
    forminput.value = `sin(${sin})`;
    tempresult.value = Math.sin(sin);
}

function cos(){
    let cos = forminput.value;
    forminput.value = `cos(${cos})`;
    tempresult.value = Math.cos(cos);
}
function tan(){
    let tan = forminput.value;
    forminput.value = `tan(${tan})`;
    tempresult.value = Math.tan(tan);
}
function log(){
    let log = forminput.value;
    forminput.value = `log(${log})`;
    tempresult.value = Math.log(log);
}
function ln(){
    let ln = forminput.value;
    forminput.value = `ln(${ln})`;
    tempresult.value = Math.log(ln);
}
function sqrt() {
    let sqrt = forminput.value;
    forminput.value = `sqrt(${sqrt})`;
    tempresult.value = Math.sqrt(sqrt);
}
function pow() {
    let base=prompt("Enter the base value:-...")
    let pow=prompt("Enter the power value:-...");
    forminput.value = `${base}^${pow}`;
    tempresult.value = Math.pow(base,pow);
}
function xfactorial(){
    let x = forminput.value;
    forminput.value = `${x}!`;
    tempresult.value = factorial(x);
}
function factorial(n) {
    if (n < 0) return undefined; // Factorial is not defined for negative numbers
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
function pi() {
    forminput.value = Math.PI;
    tempresult.value = Math.PI;
}
function e() {
    forminput.value = Math.E;
    tempresult.value = Math.E;
}

function cancelInput() {
    forminput.value = '';
    tempresult.value = ''

}


function deleteItem() {
    forminput.value = forminput.value.substr(0, forminput.value.length - 1);
}
