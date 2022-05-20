// EXERCÍCIO 1

let corpo = document.querySelector('body');

let aga1 = document.createElement('h1');
aga1.innerText = 'Exercício 5.2 - JavaScript DOM';

corpo.appendChild(aga1)

// EXERCÍCIO 2

let main = document.createElement('main');
main.className = 'main-content';

corpo.appendChild(main);

// EXERCÍCIO 3

let section = document.createElement('section');
section.className = 'center-content';

main.appendChild(section);

// EXERCÍCIO 4

let p = document.createElement('p');
p.innerText = 'QUALQUER COISA'

section.appendChild(p);

// EXERCÍCIO 5

let sectionLeft = document.createElement('section');
sectionLeft.className = 'left-content';

main.appendChild(sectionLeft);

// EXERCÍCIO 6

let sectionRight = document.createElement('section');
sectionRight.className = 'right-content';

main.appendChild(sectionRight);

// EXERCÍCIO 7

let img = document.createElement('img');
img.className = 'small-image';
img.src = 'https://picsum.photos/200';

sectionLeft.appendChild(img);

// EXERCÍCIO 8

let items = ['um', 'dois','três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

let ul = document.createElement('ul');


for (let item in items) {
  let li = document.createElement('li');
  li.innerText = items[item];
  ul.appendChild(li);  
}
console.log(ul);

sectionRight.appendChild(ul);



