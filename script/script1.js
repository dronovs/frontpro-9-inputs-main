const firstNameEl = document.querySelector('#input-firstname');
const lastNameEl = document.querySelector('#input-lastname');
const phoneEl = document.querySelector('#input-phone');
const btnAdd = document.querySelector('#button-add');
const contactsContainerEl = document.querySelector('.contacts_wrapper');
btnAdd.addEventListener('click', addContact);

function addContact () {
        let divContainer = document.createElement('div');
        divContainer.className = 'contact';
        divContainer.append(contactDivCreate('First name', validateName(firstNameEl)));
        divContainer.append(contactDivCreate('Last name', validateLastName(lastNameEl)));
        divContainer.append(contactDivCreate('Phone number', validatePhone(phoneEl)));
        contactsContainerEl.append(divContainer);
}

function validateName (input) {
    let elementValue = input.value;
    if (input.value) {
        input.value = null;
        input.style.borderColor = 'grey';
        return elementValue;
    } else {
        input.style.borderColor = 'red';
        input.placeholder = 'Put your name here';
        return '';
    }
}

function validateLastName (input) {
    let elementValue = input.value;
    if (input.value) {
        input.value = null;
        input.style.borderColor = 'grey';
        return elementValue;
    } else {
        input.placeholder = 'Put your lastname here';
        input.style.borderColor = 'red';
    }
}

function validatePhone (input) {
    let elementValue = input.value;
    if (input.value) {
        input.value = null;
        input.style.borderColor = 'grey';
        return elementValue;
    } else {
        input.placeholder = 'Put your phone here';
        input.style.borderColor = 'red';
    }
}

function contactDivCreate (key, value) {
    let div = document.createElement('div');
    div.className = 'div-contact';
    div.innerHTML = `${key}: ${value}`;
    return div;
}