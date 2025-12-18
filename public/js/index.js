async function fetchData() {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => data);

    return data;

} 

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

form.onsubmit = async e => {
    e.preventDefault();

        if(!(checkVoid(getValue('first-name-type'), 2) && checkVoid(getValue('last-name-type'), 2) && checkVoid(getValue('description-type'), 1))) {
            alert('Помилка: пусте значення');
        }
        else if(!(checkPhoneNumber(getValue('phone-number-type')))) {
            alert('Помилка: неправильний тип номера телефону')
        }
        else {
            let newMes = await fetchData(); 
            
            console.log(`${getValue('first-name-type')}\n${getValue('last-name-type')}\n${getValue('email-type')}\n${getValue('phone-number-type')}\n${getValue('description-type')}`);
            const formData = new FormData(form);
            console.log(newMes);
            formData.append("id", newMes.length+1);
            console.log(formData);
            
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users", {
                    method: "POST",
                    body: formData,
                })
                const json = await response.json();
                console.log("Succes: ", JSON.stringify(json));
            }
            catch(error){
                console.error("Error: ", error);
            }

            document.getElementById("form").reset();
            alert("Дані успішно відправлено!");
        }
    
    return false;
};