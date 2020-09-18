
//create a 16 by 16 grid (default)
function toMediumGrid() {
  deleteGrid();
  let newContainer = document.createElement('div');
  newContainer.setAttribute('id', 'grid-container-medium');
  document.getElementsByTagName('body')[0].appendChild(newContainer);
  for ( i=0 ; i<256 ; i++ ) {
    var grid = document.createElement("div");
    grid.classList.add  ("gridStyle");
    document.getElementById('grid-container-medium').appendChild(grid);
  }
  trail();
}
toMediumGrid();

function trail() {
  let cellArray = document.querySelectorAll('.gridStyle');
  for (let cell of cellArray) {
    cell.addEventListener('mouseover', function() {
      if (document.getElementById('black').checked) {
        this.style.backgroundColor = 'black';
      } else {this.style.backgroundColor = getColor()};
     });
  }
}
trail()
console.log(document.getElementById('black').checked);


//clear/reset grid
function clearGrid () {
  let cellArray = document.querySelectorAll('.gridStyle');
  cellArray.forEach(backToGray);

  function backToGray (item) {
    item.style.backgroundColor = 'hsl(11, 0%, 78%)';
  };
};

function getColor() {
  rgb1 = Math.floor(Math.random() * 255)
  rgb2 = Math.floor(Math.random() * 255)
  rgb3 = Math.floor(Math.random() * 255)
  randomColor = "rgb(" + rgb1 + ", " + rgb2 + ", " + rgb3 + ")"
  // console.log(randomColor)
  return randomColor
}

//deletes actual grid and creates small grid
function toSmallGrid () {
  deleteGrid();
  let newContainer = document.createElement('div');
  newContainer.setAttribute('id', 'grid-container-small');
  document.getElementsByTagName('body')[0].appendChild(newContainer);
  for ( i=0 ; i<4096 ; i++ ) {
    var grid = document.createElement("div");
    grid.classList.add  ("gridStyle");
    document.getElementById('grid-container-small').appendChild(grid);
  }
  trail();
}

function toLargeGrid () {
  deleteGrid();
  let newContainer = document.createElement('div');
  newContainer.setAttribute('id', 'grid-container-large');
  document.getElementsByTagName('body')[0].appendChild(newContainer);
  for ( i=0 ; i<64 ; i++ ) {
    var grid = document.createElement("div");
    grid.classList.add  ("gridStyle");
    document.getElementById('grid-container-large').appendChild(grid);
  }
  trail();
}

const RESET_GRID_BTN = document.querySelector("#resetButton");
RESET_GRID_BTN.addEventListener('click', clearGrid);

const SMALL_GRID_BTN = document.querySelector('#smallGrid');
SMALL_GRID_BTN.addEventListener('click', toSmallGrid);

const MEDIUM_GRID_BTN = document.querySelector('#mediumGrid');
MEDIUM_GRID_BTN.addEventListener('click', toMediumGrid);//construir funcion

const LARGE_GRID_BTN = document.querySelector('#largeGrid');
LARGE_GRID_BTN.addEventListener('click', toLargeGrid);

function deleteGrid() {
  if (document.getElementById('grid-container-medium')) {
    document.getElementById('grid-container-medium').remove();
  } else if (document.getElementById('grid-container-small')) {
    document.getElementById('grid-container-small').remove();
  } else if (document.getElementById('grid-container-large')) {
    document.getElementById('grid-container-large').remove();
  };
};






