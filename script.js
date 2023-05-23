const divParent = [];
const divChild = [];
const container = document.querySelector('.container');

for(let i=0; i < 16; i++) {
    divParent[i] = document.createElement('div');
    divParent[i].classList.add(`r${i}`);
    divParent[i].classList.add('row');
    container.appendChild(divParent[i]);
    temp = document.querySelector(`.r${i}`);
    for(let j=0; j < 16; j++) {
        divChild[j] = document.createElement('div');
        divChild[j].classList.add(`c${j}`);
        divChild[j].classList.add('column');
        temp.appendChild(divChild[j]);
    }
    const divColumn = document.querySelectorAll('.column');
    divColumn.forEach(column => column.addEventListener('mouseenter', black));
}

const changeGridButton = document.querySelector('#changeGrid');
changeGridButton.addEventListener('click', changeGrid);

const rainbowButton = document.querySelector('#rainbow');
rainbowButton.addEventListener('click', rainbow);

const darkerButton = document.querySelector('#darker');
darkerButton.addEventListener('click', dark);

function black(e) {
    e.target.style.backgroundColor = 'black';
}

function dark(e) {
    const divColumn = document.querySelectorAll('.column');
    const divnColumn = document.querySelectorAll('.ncolumn');
    divColumn.forEach(column => column.removeEventListener('mouseenter', black));
    divColumn.forEach(column => column.removeEventListener('mouseenter', rainbowColor));
    divColumn.forEach(column => column.addEventListener('mouseenter', darker));
    divnColumn.forEach(column => column.removeEventListener('mouseenter', black));
    divnColumn.forEach(column => column.removeEventListener('mouseenter', rainbowColor));
    divnColumn.forEach(column => column.addEventListener('mouseenter', darker));
}

function darker(e) {
    let style=window.getComputedStyle(e.target,"");
    let bgColor=style.getPropertyValue("background-color")
    firstIndex = bgColor.indexOf('(')+1;
    lastIndex = bgColor.indexOf(',');
    bgColor = bgColor.slice(firstIndex,lastIndex);
    e.target.style.backgroundColor = darkShade(bgColor);
}

function changeGrid() {
    
    let dimension = 0;
    do {
    dimension = Number(prompt('Enter number of square per side up to 100: '));
    } 
    while (dimension > 100);

    const divErase = document.querySelectorAll('.row');
    divErase.forEach(erase => erase.remove());

    for(let i=0; i < dimension; i++) {
        divParent[i] = document.createElement('div');
        divParent[i].classList.add(`r${i}`);
        divParent[i].classList.add('row');
        container.appendChild(divParent[i]);
        temp = document.querySelector(`.r${i}`);
        for(let j=0; j < dimension; j++) {
            divChild[j] = document.createElement('div');
            divChild[j].classList.add(`nc${j}`);
            divChild[j].classList.add('ncolumn');
            let size = 640/dimension;
            divChild[j].style.width = size + 'px';
            divChild[j].style.height = size + 'px';
            temp.appendChild(divChild[j]);
        }
    }
    const divnColumn = document.querySelectorAll('.ncolumn');
    divnColumn.forEach(ncolumn => ncolumn.addEventListener('mouseenter', black));
}

function rainbow () {
    const divColumn = document.querySelectorAll('.column');
    const divnColumn = document.querySelectorAll('.ncolumn');
    divColumn.forEach(column => column.removeEventListener('mouseenter', black));
    divColumn.forEach(column => column.removeEventListener('mouseenter', dark));
    divColumn.forEach(column => column.addEventListener('mouseenter', rainbowColor));
    divnColumn.forEach(column => column.removeEventListener('mouseenter', black));
    divnColumn.forEach(column => column.removeEventListener('mouseenter', dark));
    divnColumn.forEach(column => column.addEventListener('mouseenter', rainbowColor));
}

function rainbowColor (e) {
    e.target.style.backgroundColor = getRandomColor();    
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function darkShade(bgColor) {
    let maxRGB = 255;
    let xRGB = Number(bgColor);
    xRGB = Math.floor(xRGB-(maxRGB*0.1));
    const rgb = `rgb(${xRGB},${xRGB},${xRGB})`;
    return rgb;
}
