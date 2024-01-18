function createGrid(container) {
    const level = chooseLevels.value;
    container.innerHTML = '';
    for (let i = 1; i <= level; i++) {
        const cell = createBox(i);
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

function createBox(i) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.addEventListener('click', function() {
        this.classList.toggle("click");
        console.log(i);
    })
    return box;
}