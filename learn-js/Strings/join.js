
// Add your code here

let quoteStart = 'Don\'t judge each day by the harvest you reap ';
let quoteEnd = 'but by the seeds that you plant.';
let finalQuote = quoteStart+quoteEnd;


// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = finalQuote;

section.appendChild(para1);
    