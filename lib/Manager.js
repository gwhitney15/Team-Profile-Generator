class Manager {
    consturctor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }

    getRole() {
        return `Manager`
    }
}

module.exports = Manager