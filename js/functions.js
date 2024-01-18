function createGrid(container) {
    const level = chooseLevels.value;
    container.innerHTML = '';
    for (let i = 0; i < level; i++) {
        const cell = createBox();
        console.log(cell);
        if (level == "100") {
            cell.classList.add("easy");
        } else if (level == "81") {
            cell.classList.add("medium");
        } else {
            cell.classList.add("hard");
        }
        container.append(cell);
    }
    
}

function createBox() {
    const box = document.createElement("div");
    box.classList.add("box");
    return box;
}