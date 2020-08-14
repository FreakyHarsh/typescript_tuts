"use strict";
var Human = (function () {
    function Human(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    Human.prototype.greet = function (msg) {
        return msg;
    };
    Human.prototype.add = function (n1, n2) {
        return n1 + n2;
    };
    return Human;
}());
var human1 = new Human("harsh bantai", 21, [
    "eating",
    "sleeping",
    "coding",
    "gaming",
]);
console.log(human1);
console.log(human1.add(4, 5));
//# sourceMappingURL=interfaces.js.map