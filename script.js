let color = "black";

let click = true;

function populateBoard(size) {
    let board = document.querySelector('.board');
    board.style.width = "500px";
    board.style.height = "500px";

    

    board.style.display = "grid";
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;


    let amount = size * size;

    for (let i = 0; i < amount; i++) {
        let box = document.createElement('div');
        box.addEventListener("mouseover", hoverOver); 
        box.style.backgroundColor = "white";

        
        board.insertAdjacentElement("beforeend", box);
    }
}

populateBoard(16);

function changeSize(input) {
 if (input >= 16 && input <= 100) {
    populateBoard(input);
 } else {
    alert("invalid input");
 }
}

function hoverOver() {
    if (click) {
        if (color === "random") {
            this.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        } else {
            this.style.backgroundColor = color;
        }
    }
};

function changeColor (choice) {
    color = choice;
}

function resetBoard() {
    let boxes = document.querySelectorAll('div');
    boxes.forEach((div) => div.style.backgroundColor = "white");
}

document.querySelector('body').addEventListener("click", () => {
    click = !click;
})