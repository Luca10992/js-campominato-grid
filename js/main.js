const chooseLevels = document.querySelector("#levels")
const btnGenerate = document.querySelector(".btn")
const grid = document.querySelector(".wrapper")
const counterBox = document.querySelector(".counter");

btnGenerate.addEventListener('click', function() {
    createGrid(grid);
})

