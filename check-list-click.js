const checkListBtn = document.querySelectorAll('.check-list__btn');


for (let i = 0; i < checkListBtn.length; i++) {
    checkListBtn[i].addEventListener('click', e => {
        const checkBox = document.createElement('div');
        checkBox.className = 'check-box'; 
        checkBox.innerHTML = `
        <input type="checkbox">
        <p class="check-box__text">Сделать что-то</p>
        `
        checkListBtn[i].insertAdjacentElement('beforebegin', checkBox);
    });
}