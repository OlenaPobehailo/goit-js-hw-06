console.log(document);
// Завдання 1
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

// 1 спосіб
// const categoriesEl = document.querySelector('#categories');
// console.log(`Number of categories: ${categoriesEl.children.length}`)

// 2 спосіб
const categoriesEl = document.querySelectorAll('li.item');
console.log(`Number of categories: ${categoriesEl.length}`);
console.log('');

// Для кожного елемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

const titleEl = document.querySelectorAll('h2');
//console.log(titleEl);
const innerUl = document.querySelectorAll('ul:not(#categories)');
//console.log(innerUl);

titleEl.forEach(el => {
    console.log(`Category: ${el.textContent}`);
    //console.log(el.nextElementSibling.textContent);
    console.log(`Elements: ${el.nextElementSibling.children.length}`);
    console.log('');
});

