const list = document.querySelector('.output ul');
list.innerHTML = '';
let cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

for (let i = 0; i < cities.length; i++) {
  let input = cities[i];
  // write your code just below here
	let lowerCase = input.toLowerCase();
	let initial = lowerCase.slice(0,1);
	let final = lowerCase.replace(initial,initial.toUpperCase());
  let result = final;
  let listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}
