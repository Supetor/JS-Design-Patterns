var Person = function(){
	this.name = "Person";
}

var Musician = function(){
	this.talent = "Music";
}

Musician.prototype = new Person();

var Guitarist = function(){
	this.instrument = "Guitar";
}

Guitarist.prototype = new Musician();

var person1 = new Musician();

console.log("name is ", person1.name, "\nTalent is", person1.talent, "\ninstanceof Person", person1 instanceof Person, "\ninstanceof Musician", person1 instanceof Musician)

var person2 = new Guitarist();

console.log("\nname is ", person2.name, "\nTalent is", person2.talent, "\nInstrument is ", person2.instrument, "\ninstanceof Person", person2 instanceof Person, "\ninstanceof Musician", person2 instanceof Musician, "\ninstanceof Guitarist", person2 instanceof Guitarist)

person2.name = "Joe";
person2.talent = "Coding";
person2.instrument = "Computers";

console.log("\nname is ", person2.name, "\nTalent is", person2.talent, "\nInstrument is ", person2.instrument, "\ninstanceof Person", person2 instanceof Person, "\ninstanceof Musician", person2 instanceof Musician, "\ninstanceof Guitarist", person2 instanceof Guitarist)



var Animal = function(name){
	this.name = name;
}

var Dog = function(name){
	Animal.call(this, name);
	this.species = "Dog";
}

var Doglet = function(name){
	Dog.call(this, name);
	this.type = "Doglet"
}
var nauni = new Doglet("Nauni");

console.log(nauni.name, nauni.species, nauni.type)