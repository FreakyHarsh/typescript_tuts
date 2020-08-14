"use strict";
var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.createPerson = function () {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new Person('Harsh', 21);
        return this.instance;
    };
    return Person;
}());
var harsh = Person.createPerson();
var ff = Person.createPerson();
console.log(harsh);
//# sourceMappingURL=singletonsPrivateConstructor.js.map