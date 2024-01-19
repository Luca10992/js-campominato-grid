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
    const bomb = generateBomb(16, level);
    console.table(bomb)
    let isGameOver = false;
    let counter = 0;
    
    function createBox(i) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.addEventListener('click', function clickAndRemoveEvent() {
            isGameOver = false;
            if (!bomb.includes(i)) {
                
                this.classList.add("click");
                counter++;
                counterBox.innerHTML = "Punteggio: " + counter;
                if (counter == level - 16) {
                    alert("Hai vinto, hai evitato tutte le bombe");
                }
            } else {
                box.classList.add("bomb");
                isGameOver = true;
                setTimeout(function() {
                    alert("Hai preso una bomba!!!")},200);
                    setTimeout(function() {
                        location.reload()}, 200);
                }
        })
        return box;
    }
    
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    
    function generateBomb(bombs, numberOfCells) {
        const bombsList = [];
            while (bombsList.length < bombs) {
                const bomb = getRandomNumber(1, numberOfCells - 1);
                
                if (!bombsList.includes(bomb)) {
                    bombsList.push(bomb);
                }
            }
            return bombsList
    }
}







