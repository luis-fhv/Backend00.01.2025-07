import { blackList } from '../data/black_list.js';

export class Phone {
    constructor(serial, imei, brand) {
        this.serial = serial;
        this.imei = imei;
        this.brand = brand;
        this.isElegible = false;
    }

    checkElegibility() {
        // Revisar ;a lista negra
        if (blackList.includes(imei)) {
            this.isElegible = false;
        } else {
            this.isElegible = true;
        }
    }
};