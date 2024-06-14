
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
        if (currentInput1 === 0 && currentInput2 === 0)
            return;
           
    }
    if (target.classList.contains("operator"))
    {
        checkOperator(target.innerText);
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
        handleDigit(target.innerText);
    }
    
});

function checkOperator(operator) {
    if (currentInput1 === 0 && ans !== 0) 
        currentInput1 = ans;  
    currentOutput.innerText = " ";
    isNewInput = true;
    currentOperator = event.target.innerText;
}

function compute() {
    if (currentOperator === "+") 
        ans = currentInput1 + currentInput2;
    else if (currentOperator === "-")
        ans = currentInput1 - currentInput2;
    else if (currentOperator === "x") {
        ans = currentInput1 * currentInput2;
        isNewInput = false;
        currentOperator = "";
        currentInput1 = 0;
        currentInput2 = 0;
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
}

function clearCalculator() {
    ans = 0; 
    currentInput1 = 0;
    currentInput2 = 0;
    currentOperator = "";
    currentOutput.innerText = ans;
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

function handleDigit(target) {
    if (isNewInput) {
        currentInput2 = (currentInput2 * 10) + Number(target);
        currentOutput.innerText = currentInput2;
    } else {
        currentInput1 = (currentInput1 * 10) + Number(target);
        currentOutput.innerText = currentInput1;
    }
}

function isDigit(target) {
    return /^\d$/.test(target);
}
