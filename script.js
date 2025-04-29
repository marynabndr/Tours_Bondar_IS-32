// Діалог з користувачем
function dialogWithUser() {
    let wantsToTravel = confirm("Бажаєте обрати тур?");
    if (wantsToTravel) {
        let country = prompt("Яку країну бажаєте відвідати?");
        while (!country) {
            country = prompt("Будь ласка, введіть назву країни:");
        }
        alert(`Чудовий вибір! ${country} чекає на Вас!`);
    } else {
        alert("Можливо наступного разу 😉");
    }
}

// Інформація про розробника
function showDeveloperInfo(surname, name, position = "студентка групи ІС-32") {
    alert(`Розробник сторінки: ${surname} ${name}\nПосада: ${position}`);
}

// Порівняння двох рядків
function compareStrings(str1, str2) {
    if (str1.length > str2.length) {
        alert(`Перший рядок довший: "${str1}"`);
    } else if (str2.length > str1.length) {
        alert(`Другий рядок довший: "${str2}"`);
    } else {
        alert(`Рядки однакової довжини:\n"${str1}" і "${str2}"`);
    }
}

