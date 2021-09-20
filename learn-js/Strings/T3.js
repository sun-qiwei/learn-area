let quote = 'I dO nOT lIke gREen eGgS anD HAM';

// Add your code here
 
let fixedQuote = quote.toLowerCase();
fixedQuote=fixedQuote.replace("green eggs and ham","tofu")
let finalQuote = fixedQuote+'.';
// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = fixedQuote;
let para2 = document.createElement('p');
para2.textContent = finalQuote;

section.appendChild(para1);
section.appendChild(para2);
    