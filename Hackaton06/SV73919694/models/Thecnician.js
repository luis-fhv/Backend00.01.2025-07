export class Thecnician {
    constructor(name, skills) {
        this.name = name;
        this.skills = skills;
        this.id = Date.now();
    }

    canRepair(brand) {
        return this.skills.includes(brand);
    }
}
