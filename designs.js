// selecting elements
let height = document.querySelector('#inputHeight');
let width = document.querySelector('#inputWidth');
let submit = document.querySelector('.sizeSubmit');
let canvas = document.querySelector('#pixelCanvas');
let color = document.querySelector('#colorPicker')

// function to make the grid when 
function makeGrid() {
    // clears the canvas
    canvas.innerHTML = '';
    // loops to create and append grid squares to the table
    for (i = 1; i <= Number(height.value); i++) {
        const row = document.createElement('tr');
        canvas.appendChild(row);
        for (j = 1; j <= Number(width.value); j++) {
            const block = document.createElement('td');
            row.appendChild(block);
        };
    };
};

// function to add color to the block based on user selection
function colorBlock(event) {
    event.target.style.backgroundColor = color.value;
};

// listener for grid creation
submit.addEventListener('click', function (event) {
    // prevents the page from refreshing
    event.preventDefault();
    makeGrid();
});

// listener for user to color square
// mouseup type needed over click to prevent bug when click and dragging
canvas.addEventListener('mouseup', colorBlock);

// listener to provide an initial grid when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    makeGrid()
});