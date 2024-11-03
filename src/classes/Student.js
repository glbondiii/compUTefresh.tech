export class Student {
    constructor(name, ta) {
        // Constants During Runtime
        this.name = name;         
        this.ta = ta;

        // Changing During Runtime
        this.order = -1; // -1 means not in queue
        this.cooldownTime = 0;
        this.absences = 0;
    }

    isOnCooldown() {
        return (cooldown > 0);
    }

    toString() {
        return this.name;
    }
}




