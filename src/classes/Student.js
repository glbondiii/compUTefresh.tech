export class Student {
    constructor(name, ta) {
        this.name = name;         
        this.ta = ta;
        this.cooldown_time = 0;
        this.penalty = 0;
    }
}

export const DEFAULT_STUDENT_COOL_DOWN_SECONDS = 1200;

