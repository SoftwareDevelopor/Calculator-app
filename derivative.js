function derivative(){
    let functionExpression=prompt("Enter the function to differentiate:-...");

    let variableInput=prompt("Enter the variable of the differentiation:-..")
    
    forminput.value=`d(${functionExpression})/d(${variableInput})`;

    const mathjsstring=math.parse(functionExpression);  //converting the function Input into the expression
    const calcderivative=math.derivative(mathjsstring,variableInput);   //calculation of derivative
    const simplifiedresult=math.simplify(calcderivative);   //simplify the result
    const resultstr=simplifiedresult.toString();    //storing the result in the resultInput
    tempresult.value=resultstr;
}