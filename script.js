const geo = document.querySelector('.geo');
const sticker = document.querySelector('.sticker');
const list = document.querySelector('.list');

const addBtnTextPlace = document.getElementById('place');
const addBtnTextNote = document.getElementById('note');
const addBtnTextTask = document.getElementById('task');

geo.addEventListener('mouseover', hover => {
    geo.classList.add('size');
    addBtnTextPlace.classList.add('active');
});

geo.addEventListener('mouseout', hover => {
    addBtnTextPlace.classList.remove('active');
    geo.classList.remove('size');
});

sticker.addEventListener('mouseover', hover => {
    sticker.classList.add('size');
    addBtnTextNote.classList.add('active');
});

sticker.addEventListener('mouseout', hover => {
    addBtnTextNote.classList.remove('active');
    sticker.classList.remove('size');
});

list.addEventListener('mouseover', hover => {
    list.classList.add('size');
    addBtnTextTask.classList.add('active');
});

list.addEventListener('mouseout', hover => {
    addBtnTextTask.classList.remove('active');
    list.classList.remove('size');
});
