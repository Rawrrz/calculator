// Function to add 2 numbers
function add(num1, num2)
{
  return num1 + num2;
}

// Function to subtract 2 numbers
function sub(num1, num2)
{
  return num1 - num2;
}

// Function to multiply 2 numbers
function mult(num1, num2)
{
  return num1 * num2;
}

// Function to divide 2 numbers
function div(num1, num2)
{
   return num1 / num2;
}

// Function to perform operation
function operate(operator, num1, num2)
{
  switch(operator)
  {
    case '÷':
      return div(num1, num2);
      break;
    case '×':
      return mult(num1, num2);
      break;
    case '-':
      return sub(num1, num2);
      break;
    case '+':
      return add(num1, num2);
      break;
  }
}

function setDigitListeners()
{
  let digitList = document.querySelectorAll('.digit');
  
  for(let i = 0; i < digitList.length; i++)
  {
      digitList[i].addEventListener("click", ()=>
      {
          let display = document.querySelector('.num');
          displayString += digitList[i].textContent;
          display.textContent = displayString;
      });
  }
}

function setSignListeners()
{
  let opList = document.querySelectorAll('.operator');
  let clear = document.querySelector('.clear');
  
  for(let i = 0; i < opList.length; i++)
  {
      opList[i].addEventListener("click", ()=>
      {
        operation = opList[i].textContent;
        if(!secondFlag)
        {
          num1 = Number(displayString);
          secondFlag = true;
          displayString = "";
        }
        else
        {
          num2 = Number(displayString);
          let result = operate(operation, num1, num2)
          displayString = result.toString();
          
          let display = document.querySelector('.num');
          display.textContent = displayString;
          displayString = "";
          num1 = result;
        }      
      });
  }
  
  let equal = document.querySelector('.equal');
    
      equal.addEventListener("click", ()=>
      {
          num2 = Number(displayString);
          let result = operate(operation, num1, num2);
          displayString = result.toString();
          
          let display = document.querySelector('.num');
          display.textContent = displayString;  
        
          secondFlag = false; 
              
      });
  
  clear.addEventListener("click", ()=>
  {
      let display = document.querySelector('.num');
      display.textContent = "0";
      displayString = "";
      secondFlag = false;
      num1 = 0;
      num2 = 0;
  });
}

let secondFlag = false;
let displayString = "";
let num1;
let num2 = "";
let operator;

setDigitListeners();
setSignListeners();