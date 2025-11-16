import { Phone } from './models/Phone.js';
import { Repair } from './models/Repair.js';
import { showSection, hiddenSection } from './ui/visible_functions.js'
import { thecnicians_person } from './data/thecnicians_person.js';

showSection('register-repair-form');

let currentRepair = null;

document.getElementById('send-repair').addEventListener('click', () => {
    const serial = document.getElementById('serial').value;
    const imei = document.getElementById('imei').value;
    const brand = document.getElementById('brand').value;

    if (!serial || !imei || !brand) {
        alert('Complete los detalles.')
        return;
    }

    const phone = new Phone(serial, imei, brand);

    phone.checkElegibility()

    if (phone.isElegible) {
        currentRepair = new Repair(phone);
        hiddenSection('register-repair-form');
        showSection("first-diagnosis-section");
    } else {
        alert('Telefono Registrado como robado.')
    }

})

document.getElementById('send-first-diagnosis').addEventListener('click', () => {
    const first_diagnosis = document.getElementById('first-diagnosis').value;
    const authorization = document.getElementById('authorization').checked;
    const payment = document.getElementById('payment').value;

    if (!authorization) {
        return alert('Se necesita la Autorizacion del usuario.')
    }

    if (Number(payment) <= 0) {
        return alert('Debe ingrese un monto valido')
    }

    if (first_diagnosis === '') {
        return alert('Ingresar un diagnostico.')
    }

    currentRepair.confirmAuthorization(authorization, payment);
    currentRepair.saveDiagnostic(first_diagnosis);

    hiddenSection('first-diagnosis-section');

    const selectTech = document.getElementById('tech-select');

    const filterTechs = thecnicians_person.filter(tech => {
        return tech.skills.includes(currentRepair.phone.brand)
    })

    filterTechs.forEach(item => {
        const newOtion = document.createElement('option')
        newOtion.value = item.id;
        newOtion.textContent = item.name;
        selectTech.appendChild(newOtion);
    })

    showSection("select-thecnician");
})


document.getElementById('send-tech').addEventListener('click', () => {
    const techSelect = document.getElementById('tech-select').value;
    const parts = document.getElementById('parts').value;


    currentRepair.assignTechnician(techSelect);

    currentRepair.addPart(parts);
    
    // console.log('localStorage.getItem', localStorage.getItem('repairs'));

    const listofRepairs = localStorage.getItem('repairs') !== undefined ? JSON.parse(localStorage.getItem('repairs')) : [];
    
    listofRepairs.push(currentRepair);

    localStorage.setItem('repairs', JSON.stringify(listofRepairs));

    currentRepair = null;

    alert('Reparacion creada y asiganda de manera correcta');

    hiddenSection('select-thecnician');
    showSection('register-repair-form');
})
