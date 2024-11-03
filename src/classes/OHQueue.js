const BASE_STUDENT_COOL_DOWN_SECONDS = 1200; // 20 minutes
const MAX_COOL_DOWN_SECONDS = 43200; // 12 hours

export class OHQueue {
    constructor() {
        this.studentQueue = [];
        this.activeTAs = [];
        this.currentStudents = [];
        this.isOpen = false;
    }

    openOH() {
        this.isOpen = true;
    }

    closeOH() {
        this.isOpen = false;
    }

    addStudentToQueue(student, roster) {
        if (!this.isOpen) {
            return false;
        }
        
        if (!roster.contains(student)) {
            return false;
        }

        if (this.studentQueue.contains(student)) {
            return false;
        }

        this.studentQueue.push(student);

        return true;
    }

    removeStudentFromQueue(student, studentBeingHelped) {
        if (this.studentQueue.length == 0) {
            return false;
        }

        if (student.order < 0) {
            return false;
        }

        this.studentQueue.splice(student.order, 1);
        student.order = -1;

        if (studentBeingHelped) {
            this.currentStudents.push(student);
        }

        return true;
    }

    deferNextStudent() {
        deferredStudent = this.studentQueue.shift();
        this.studentQueue.slice(1, 0, deferredStudent);
    }

    helpComplete(student, studentWasAbsent) {
        if (!this.currentStudents.contains(student)) {
            return false;
        }

        const index = this.currentStudents.indexOf(student);
        
        this.currentStudents.splice(index, 1);

        if (studentWasAbsent) {
            student.absences++;
        }

        student.cooldownTime = Math.max(MAX_COOL_DOWN_SECONDS,
            BASE_STUDENT_COOL_DOWN_SECONDS * Math.max(student.absences, 1));

        return true;
    }
}


