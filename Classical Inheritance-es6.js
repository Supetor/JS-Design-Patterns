'use strict'

class Person{
  constructor(){
    this.name = 'Person'
  }
}

class Musician extends Person{
  constructor(){
    super()
    this.talent = 'Music'
  }
}

class Guitarist extends Musician{
  constructor(){
    super()
    this.instrument = 'Guitar'
  }
}

let person1 = new Guitarist()

console.log(`name is ${person1.name}
Talent is ${person1.talent}
Instrument is ${person1.instrument}
instanceof Person ${person1 instanceof Person}
instanceof Musician ${person1 instanceof Musician}
instanceof Guitarist ${person1 instanceof Guitarist}\n`)

