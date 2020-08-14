// SingleTons Private Constructor is a rare case
// We can only make one object instance with this singletons private constructor

class Person {
  name: string;
  age: number;
  private static instance: Person;
  private constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  static createPerson() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new Person('Harsh', 21);
    return this.instance;
  }
}

const harsh = Person.createPerson();
const ff = Person.createPerson();
console.log(harsh);