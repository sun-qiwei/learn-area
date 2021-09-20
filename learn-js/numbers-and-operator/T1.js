
let finalResult;

let evenOddResult;

// Add your code here
let num1=4,num2=2,num3=2,num4=10;
let sum = num1+num2;
let sub = num4-num3;
finalResult=sum*sub;
evenOddResult = finalResult%2;





// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
let finalResultCheck = finalResult === 48 ? `Yes, well done!` : `No, it is ${ finalResult }`;
para1.textContent = `Is the finalResult 48? ${ finalResultCheck }`;
let para2 = document.createElement('p');
let evenOddResultCheck = evenOddResult === 0 ? 'The final result is even!' : 'The final result is odd. Hrm.'
para2.textContent = evenOddResultCheck;

section.appendChild(para1);
section.appendChild(para2);
    