import './style.css'

const btnAddElm = document.getElementById('btn-add');
const txtBoxElm = document.getElementById('txt-box');
const toDoWrapperElm = document.getElementById('todo-wrapper');
const modeElm = document.querySelector("#mode");


modeElm.addEventListener('change', () => {
    if (modeElm.checked) {
        document.querySelector('html').setAttribute('data-bs-theme', 'dark');
    } else {
        document.querySelector('html').removeAttribute('data-bs-theme');
    }
});
btnAddElm.addEventListener('click', (e) => {

    const task = txtBoxElm.value.trim();
    if (!task) {
        e.preventDefault();
        txtBoxElm.focus();
        txtBoxElm.select();
        return;
    }


    const listItemElm = document.createElement('div');
    const lblElm = document.createElement('label');
    const ChkInputElm = document.createElement('input');
    const textElm = document.createTextNode(task);
    const iElm = document.createElement('i');

    lblElm.append(ChkInputElm);
    lblElm.append(textElm);
    listItemElm.append(lblElm);
    listItemElm.append(iElm);

    listItemElm.setAttribute("class", "d-flex gap-2 mt-3 justify-content-between animate__animated animate__fadeInBottomRight");
    lblElm.setAttribute("class", "d-flex gap-2");
    ChkInputElm.setAttribute("type", "checkbox");
    iElm.setAttribute("class", "bi bi-trash");

    toDoWrapperElm.append(listItemElm);
    txtBoxElm.value = "";
});

toDoWrapperElm.addEventListener('click', (e) => {
    if (e.target.getAttribute("class") === 'bi bi-trash') {
        const listItemElm = e.target.parentElement;
        listItemElm.classList.remove('animate__fadeInBottomRight');
        listItemElm.classList.add('animate__fadeOutBottomRight');

        listItemElm.addEventListener('animationend', () => {
            listItemElm.remove();
        }, { once: true });
    }
});