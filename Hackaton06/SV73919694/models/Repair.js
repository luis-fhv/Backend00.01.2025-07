import { thecnicians_person } from "../data/thecnicians_person.js";

export class Repair {
    constructor(phone) {
        this.phone = phone;
        this.diagnosis = '';
        this.authorization = false;
        this.downPayment = 0;
        this.thecnician = null;
        this.parts = [];
        this.status = 'En Revision';
        this.id = Date.now();
    }

    saveDiagnostic(diagnosis) {
        this.diagnosis = diagnosis
    }

    confirmAuthorization(hasAuth, payment) {
        this.authorization = hasAuth;
        this.downPayment = payment;
    }

    assignTechnician(id) {
        for (let tech of thecnicians_person) {
            if (tech.canRepair(this.phone.brand)) {
                this.thecnician = tech.name;
                // return `Asignado a ${tech.name}`
            }
        }
    }

    addPart(partStr) {
        this.parts = this.parts.concat(partStr.split(',').map(p => p.trim()));
    }

    updateStatus(newStatus) {
        this.status = newStatus;
    }

}