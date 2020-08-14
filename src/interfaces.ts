// interfaces are used to define a structure for an object
// We could have used type Age = { age?: number }
// but for object's structure we often use interface

// Notice: You can make optional properties in an interface or type by using ?
interface Age {
	// Here we forced age to be an optional parameter
	age?: number;
}
interface Hobbies {
	// Just made another interface to confirm that we can extend multiple interfaces
	hobbies: string[];
}

// ------ This is an interface for Function-------
interface functionalInterface {
	add(a: number, b: number): number;
}
// ---------------------------------------------------

// Here, we extended two interfaces to greet interface
// This can't be done with class since JS just have mutlilevel inheritance and not mutliple.
interface Greet extends Age, Hobbies, functionalInterface {
	name: string;
	greet(msg: string): string;
}

// WHY WE USE INTERFACE ?
// We use interface to define a structure for a class/ function/ object
// Interface forces Developers to include the required properties and thus to write less error prone code
class Human implements Greet {
	name: string;
	age: number;
	hobbies: string[];
	constructor(name: string, age: number, hobbies: string[]) {
		this.name = name;
		this.age = age;
		this.hobbies = hobbies;
	}
	greet(msg: string) {
		return msg;
	}
	add(n1: number, n2: number): number {
		return n1 + n2;
	}
}

let human1 = new Human("harsh bantai", 21, [
	"eating",
	"sleeping",
	"coding",
	"gaming",
]);
console.log(human1);
console.log(human1.add(4, 5));
