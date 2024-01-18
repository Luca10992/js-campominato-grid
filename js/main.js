const chooseLevels = document.querySelector("#levels")
const btnGenerate = document.querySelector(".btn")
const grid = document.querySelector(".wrapper")

btnGenerate.addEventListener('click', function() {
    createGrid(grid);
})

