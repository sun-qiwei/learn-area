const list = document.querySelector('.output ul');
list.innerHTML = '';
let greetings = ['Happy Birthday!',
                 'Merry Christmas my love',
                 'A happy Christmas to all the family',
                 'You\'re all I want for Christmas',
                 'Get well soon'];

for (let i = 0; i < greetings.length; i++) {
  let input = greetings[i];
  // Your conditional test needs to go inside the parentheses
  // in the line below, replacing what's currently there
  if (greetings[i].indexOf("Christmas")!==-1) {
    let listItem = document.createElement('li');
    listItem.textContent = input;
    list.appendChild(listItem);
  }
}
