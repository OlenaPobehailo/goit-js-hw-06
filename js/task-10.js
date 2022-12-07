/*
Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>

Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

Розміри найпершого <div> - 30px на 30px.
Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
*/

const boxesEl = document.querySelector('#boxes');
const inputEl = document.querySelector('input[type="number"]');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');

buttonCreate.addEventListener('click', onButtonCreateClick);
buttonDestroy.addEventListener('click', onButtonDestroyClick);
inputEl.addEventListener('input', onInputChange);

function onButtonCreateClick() {
    const divQuantity = inputEl.value;
    createBoxes(divQuantity);
}

function onButtonDestroyClick(event) {
    boxesEl.innerHTML = '';
}

function onInputChange(event) {
    return event.currentTarget.value;
}

function createBoxes(amount) {
    let size = 30;

    for (let i = 0; i < amount; i += 1) {
        let currentSize = size + i * 10 + 'px';
        const currentColor = getRandomHexColor();

        let currentDiv = document.createElement('div');

        currentDiv.style.width = currentSize;
        currentDiv.style.height = currentSize;
        currentDiv.style.backgroundColor = currentColor;

        boxesEl.appendChild(currentDiv);
    }
    // console.log(boxesEl);
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
