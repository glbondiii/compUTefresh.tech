export class Student {
    constructor(name, ta) {
        this.name = name;         
        this.ta = ta;
        this.order = -1; // -1 means not in queue
        this.cooldownTime = 0;
        this.absences = 0;
    }

    isOnCooldown() {
        return (cooldown > 0);
    }
}




