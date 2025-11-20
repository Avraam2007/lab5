function checkPhoneNumber(number) {
    return /^[\+]?[(]?[3][8][)]?[-\s\.\(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{2}[-\s\.]?[0-9]{2}$/.test(number);
}

function checkVoid(value, minlength) {
    return value.trim().length >= minlength ? true : false;
}

function getValue(id) {
    return document.getElementById(id).value;
}

const form = document.getElementById('form');

form.onsubmit = e => {
    e.preventDefault();

        if(!(checkVoid(getValue('first-name-type'), 2) && checkVoid(getValue('last-name-type'), 2) && checkVoid(getValue('description-type'), 1))) {
            alert('Помилка: пусте значення');
        }
        else if(!(checkPhoneNumber(getValue('phone-number-type')))) {
            alert('Помилка: неправильний тип номера телефону')
        }
        else {
            console.log(`${getValue('first-name-type')}\n${getValue('last-name-type')}\n${getValue('email-type')}\n${getValue('phone-number-type')}\n${getValue('description-type')}`);
            fetch("https://jsonplaceholder.typicode.com/users")
                .then(response => response.json())
                .then(data => console.log(data));
            document.getElementById("form").reset();
            alert("Дані успішно відправлено!");
        }
    
    return false;
};