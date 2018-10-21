const TechYogi = require('./techYogi')
const Yogasession = require('./yogasession')
const Chalk = require('chalk')
const Database = require('./database')


console.log('Hi World')
 

 
 
const mala = new TechYogi('Mala', 28)
const anna = new TechYogi('Anna', 26)
const maria = new TechYogi('Maria', 27)

console.log(anna, mala, maria)

const yogasession1 = new Yogasession ('Yoga with WomenTechmakers', 'Berlin')


console.log(yogasession1)

mala.attend(yogasession1)
anna.attend(yogasession1)
maria.attend(yogasession1)


yogasession1.report()

console.log(yogasession1.attendees)

console.log(Chalk.blue(anna.name))
console.log(Chalk.red(mala.name))
console.log(Chalk.green(maria.name))




