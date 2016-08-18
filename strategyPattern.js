var Weapon = function(startSound){
	this.sound = startSound;
	this.attack = function(){
		console.log(this.sound);
	}
	this.throw = function(){
		return "Throwing!"
	}
}

var Person = function(startWeapon){
	var weapon = startWeapon;
	this.changeWeapon = function(newWeapon){
		weapon = newWeapon;
	}
	this.attack = function(){
		weapon.attack();
	}
	this.throwWeapon = function(){
		return weapon.throw();
	}
}



var sword = new Weapon("Clang!");
var john = new Person(sword);

john.attack();
console.log(john.throwWeapon())
console.log(sword.throw())