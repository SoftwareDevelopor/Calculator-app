
function integration(){
    let FunToIntegrate=prompt("Enter the function to Integrate:-...");
    
    let upperbound=Number(prompt("Enter the upperbound=>..."));
    let lowerbound=Number(prompt("Enter the lowerbound=>..."));
    let numberOfSteps=Number(prompt("Enter the number of steps to calculate the true value=>..."));

    forminput.value=`∫(${FunToIntegrate}) from ${lowerbound} to ${upperbound}`;

    let integralFunction=math.compile(FunToIntegrate);   //Creation of the function from the input.
    

    let computfun=(x)=> integralFunction.evaluate({x: x});

    let computeInegral=numericalIntegrate(computfun,lowerbound,upperbound,numberOfSteps);

    if (isNaN(computeInegral)) {
        // Handle the NaN case, maybe show an error message
        tempresult.value = "";
        console.error("Invalid calculation resulted in NaN");
    } 
    else {
        // The calculation was fine, set the result.
        tempresult.value = computeInegral;
    }

}

function numericalIntegrate(func,a,b,n){
    let sum=0;
    let h=(b-a)/n;
    for(let i=0;i<n;i++){
        let c=a+(i+0.5)*h;
        sum+=func(c);
    }
    return sum*h;
}