
    let currentOutput = document.querySelector(".output");
    let currentInput1 = 0;
    let currentInput2 = 0;
    let currentOperator = "";
    let ans = 0;
    let flag = false;

document
.querySelector(".calc-container")
.addEventListener("click", function(event)
{
    if (event.target.classList.contains("operator"))
    {
        if (currentInput1 === 0) 
            currentInput1 = ans;  
        currentOutput.innerText = 0;
        flag = true;
        currentOperator = event.target.innerText;
    }
    else if (event.target.classList.contains("compute"))
    {
        if (currentOperator === "+") 
            ans = currentInput1 + currentInput2;
        else if (currentOperator === "-")
            ans = currentInput1 - currentInput2;
        else if (currentOperator === "x") {
            ans = currentInput1 * currentInput2;
            flag = false;
            currentOperator = "";
            currentInput1 = 0;
            currentInput2 = 0;
        }
        else
            ans = currentInput1 / currentInput2;
        currentOutput.innerText = ans;

        
    }
    else if (flag)
    {
        currentInput2 *= 10;
        currentInput2 += Number(event.target.innerText);
        currentOutput.innerText = currentInput2;
    }
    else 
    {
        currentInput1 *= 10;
        currentInput1 += Number(event.target.innerText);
        currentOutput.innerText = currentInput1;
    } 
});