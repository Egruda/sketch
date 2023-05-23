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
    divColumn.forEach(column => column.addEventListener('mouseenter', (e) => e.target.style.backgroundColor = 'black'));
}



const changeGridButton = document.querySelector('#changeGrid');
changeGridButton.addEventListener('click', changeGrid);

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
    divnColumn.forEach(ncolumn => ncolumn.addEventListener('mouseenter', (e) => e.target.style.backgroundColor = 'black'));

}



