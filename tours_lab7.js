function highlightTours() { // через атрибут
    alert("Виберіть свій тур! Популярні напрямки вже чекають!");
}

const secondHeading = document.querySelectorAll("h1")[1]; // через властивість
secondHeading.onmouseover = function () {
    secondHeading.style.color = "#FF5733";
};
 
// 2 обробники до 1 події
const table = document.querySelector("table");
function showTableMessage() {
    console.log("Клік по таблиці з турами!");
}
function highlightTable() {
    table.style.border = "3px solid #FF5733";
}
table.addEventListener("click", showTableMessage);
table.addEventListener("click", highlightTable);

// об'єкт-обробник з методом handleEvent
const objectHandler = {
    handleEvent(event) {
        alert("Для бронювання зв'яжіться з менеджерами");
        console.log("Поточний елемент:", event.currentTarget);
    }
};
table.addEventListener("dblclick", objectHandler); 

 
setTimeout(() => {
    table.removeEventListener("dblclick", objectHandler);
    console.log("Об'єкт-обробник видалено (двійний клік більше не обробляється)");
}, 20000);

