const container = document.querySelector('#container');

input = 16
grid = Math.pow(input,2);

function genDivs(grid){  
        for(i = 1; i < grid; i++){ 
            var cell = document.createElement("div"); 
			cell.classList.add('cell')
			cell.style.width = (100/input)+"%"; //<-- doesn't seem to work
			cell.style.height = (100/input)+"%"; //<-- doesn't seem to work
  		 	cell.addEventListener('mouseenter', (e) => {
  	      		e.target.style.background = 'black';});
            container.appendChild(cell); 
			}
		} 

	genDivs(grid)	  
	 
	  clearGrid = document.getElementById('1');
	  clearGrid.addEventListener('click', function() {
	    container.innerHTML = '';
	    input = prompt('Enter a number:');
		grid = Math.pow(input,2);
	    genDivs(grid);
	  });
	  