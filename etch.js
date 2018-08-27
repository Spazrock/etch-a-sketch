function genDivs(v){ 
      const container = document.querySelector('#container'); 
      for(i = 0; i < v; i++){ 
        var row = document.createElement("div"); 
        row.className = "row"; 
        for(x = 1; x <= v; x++){ 
            var cell = document.createElement("div"); 
            cell.className = "gridsquare"; 
			cell.classList.add('cell');
            row.appendChild(cell); 
        } 
        container.appendChild(row); 
      } 
	  document.getElementById("container").innerHTML = container.innerHTML;
    }

	genDivs(16)
	
	const cells = document.querySelectorAll('.cell');
	  cells.forEach((div) => {
		  div.addEventListener('mouseenter', (e) => {
	      e.target.style.background = 'black';
	      });
	  });