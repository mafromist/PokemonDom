const colors = ['red', 'orange', 'brown', 'green', 'lightblue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

const h1 = document.querySelector('h1');
h1.style.textAlign = 'center';

const spans = document.querySelectorAll('span');


  for(let i = 0; i < colors.length; i++){
      spans[i].style.color = colors[i];
  }

const container = document.querySelector('#container');
container.style.textAlign = 'center';

for(let k = 0; k < 300; k++) {
  const newImg = document.createElement('img');
  newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${k}.png`
  container.appendChild(newImg);
}


