
    let currentOutput = document.querySelector(".output");
    let currentInput1 = 0;
    let currentInput2 = 0;
    let currentOperator = "";
    let ans = 0;
    let isNewInput = false;
    

document
.querySelector(".calc-container")
.addEventListener("click", function(event)
{  
    const target = event.target;
   
    if (target.classList.contains("operator") 
        || target.classList.contains("compute") 
        || target.classList.contains("del"))
    {
           
    }
    if (target.classList.contains("operator"))
    {
        evaluateOperator(target.innerText);
    }
    else if (target.classList.contains("compute"))
    {
        compute();
    }
    else if (target.classList.contains("clear"))
    {
           clearCalculator();
        
    } else if(target.classList.contains("del"))
    {
        deletion();
    } else if (isDigit(target.innerText)) {
        evaluateDigit(target.innerText);
    }
    
});

function evaluateOperator(operator) {
    if (currentInput1 === 0 && ans !== 0)
        {
            currentInput1 = ans;
            isNewInput = true;
        }
    currentOutput.innerText = " ";
    currentOperator = operator;
}

function compute() {
    if (currentOperator === "+") 
        ans = currentInput1 + currentInput2;
    else if (currentOperator === "-")
        ans = currentInput1 - currentInput2;
    else if (currentOperator === "x") {
        ans = currentInput1 * currentInput2;
    }
    else 
    {
        if (currentInput2 === 0) {
            currentOutput.innerText = "invalid";
            return;
        } else              
            ans = currentInput1 / currentInput2;
    }
        currentOutput.innerText = ans;  
        isNewInput = false;
        currentOperator = "";
        currentInput1 = 0;
        currentInput2 = 0; 
}

function clearCalculator() {
    ans = 0; 
    currentInput1 = 0;
    currentInput2 = 0;
    currentOperator = "";
    currentOutput.innerText = ans;
    isNewInput = false;
}

function deletion() {
    if (isNewInput) {
        currentInput2 = Math.floor(currentInput2 / 10);
        currentOutput.innerText = currentInput2;
    }  
    else {
        currentInput1 = Math.floor(currentInput1 / 10);
        currentOutput.innerText = currentInput1;
    }
}

function evaluateDigit(target) {
    if (isNewInput) {
        currentInput2 = (currentInput2 * 10) + Number(target);
        currentOutput.innerText = currentInput2;
    } else {
        currentInput1 = (currentInput1 * 10) + Number(target);
        currentOutput.innerText = currentInput1;
        isNewInput = true;
    }
}

function isDigit(target) {
    return /^\d$/.test(target);
}
