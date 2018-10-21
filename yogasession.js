const Chalk = require('chalk')

module.exports = class Yogasession {
    constructor(name, location) {
        this.name = name
        this.location = location
        this.attendees = []
    }


report() {
    console.log(Chalk.blue.bgRed(this.name), 'yogasession is held at', this.location, 'and number of attendees are', this.attendees.length)
}
}