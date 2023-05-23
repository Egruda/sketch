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
        divChild[j].innerText = 'Test';
        temp.appendChild(divChild[j]);
    }
}

