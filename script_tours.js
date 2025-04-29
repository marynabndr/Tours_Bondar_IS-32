// Зміна фону на 30 сек
document.body.style.backgroundColor = "#F0F8FF"; 

setTimeout(() => {
    document.body.style.backgroundColor = "#F2F2E9";
}, 30000); 

// Перенаправлення на іншу сторінку
//setTimeout(() => {
   // location.href = "https://www.google.com.ua/maps/@50.429952,30.4840704,12z?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D"; // Заміни на бажану сторінку
//}, 50000);

// getElementById — зміна заголовку таблиці
document.getElementById("main-title").innerHTML = "<b>Тури Європи</b>";

// querySelectorAll — зміна h1
const headers = document.querySelectorAll("h1");
headers.forEach(header => {
    header.style.color = "#255459";
    header.textContent += " 🌟"; 
});

//DOM-властивості
const firstTourCell = document.querySelector("tbody tr td"); //1 клітинка 1 рядок
console.log("innerHTML:", firstTourCell.innerHTML); // весь HTML-вміст всередині елемента
console.log("outerHTML:", firstTourCell.outerHTML); // весь елемент цілком, включно з його тегами
console.log("textContent:", firstTourCell.textContent); // лише текстовий вміст елемента, без HTML-тегів
console.log("nodeValue/data (перший текстовий вузол):", firstTourCell.firstChild?.nodeValue); // доступ до вузла-тексту, який є дочірнім всередині td


// document.write 
document.write("<!-- Цей текст вставлено за допомогою document.write -->");

// createElement, createTextNode та методів вставки
const newPara = document.createElement("p");
const textNode = document.createTextNode("🌄 Новий екскурсійний тур скоро буде доступний!");
newPara.appendChild(textNode);
const h1 = document.querySelector("h1");
h1.after(newPara);

// prepend — додаємо елемент на початок <main>
const notice = document.createElement("div");
notice.textContent = "🚌 Гарячі тури! Не прогавте!";
notice.style.color = "red";
document.querySelector("main").prepend(notice);

// replaceWith — замінюємо перший <h2>
const newHeading = document.createElement("h2");
newHeading.textContent = "🔁 Оновлені тури";
document.querySelector("h2").replaceWith(newHeading);

// remove — видаляємо останній рядок таблиці
const lastRow = document.querySelector("tbody").lastElementChild;
lastRow.remove();


