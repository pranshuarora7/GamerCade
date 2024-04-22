const container = document.getElementById('container');
const newGridButton = document.getElementById('newGridButton');
const gridSizeInput = document.getElementById('gridSize');
let isDrawing = false;

newGridButton.addEventListener('click', function () {
    let gridSize = parseInt(gridSizeInput.value);

    if (!gridSize || gridSize < 1 || gridSize > 25) {
        alert('Please enter a valid number between 1 and 25.');
        return;
    }

    removeGrid();
    createGrid(gridSize);
});

function removeGrid() {
    container.innerHTML = '';
}

function createGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    const squareSize = 500 / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        container.appendChild(square);

        square.addEventListener('mousedown', function (event) {
            event.preventDefault();
            isDrawing = true;
            square.style.backgroundColor = 'black';
        });


        square.addEventListener('mouseenter', function () {
            if (isDrawing && event.buttons === 1) {
                square.style.backgroundColor = 'black';
            }
        });

        square.addEventListener('mouseup', function () {
            isDrawing = false;
        });

        square.addEventListener('mouseleave', function () {
            if (isDrawing && event.buttons === 1) {
                square.style.backgroundColor = 'black';
            }
        });
    }
}
