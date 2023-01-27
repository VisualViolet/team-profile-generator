// Manger class that inherists employee with additional officeNumber constructor parameter
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
    
        this.officeNumber = officeNumber;
    }

    // Methods
    getRole() {
        return 'Manager';
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;