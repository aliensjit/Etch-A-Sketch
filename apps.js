const main= document.querySelector("#main");
const btn= document.querySelector("#btn");


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function create() {
	const grid= document.createElement("div");
	grid.className='box';
	
	grid.addEventListener('mouseover', function(){
		grid.style.backgroundColor = getRandomColor();
	})
	main.appendChild(grid);
	btn.addEventListener('click', function(){
	grid.style.backgroundColor = 'white';
})
}

create();

for (i=0 ; i<10000 ; i++) {
	create();
}


