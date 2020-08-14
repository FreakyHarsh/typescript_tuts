"use strict";
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
var e1 = {
    name: 'Harsh',
    startDate: new Date(),
    privilages: ['Free food', 'Fuel']
};
function printEmployeeInformation(emp) {
    console.log('Name: ' + emp.name);
    if ('privilages' in emp) {
        console.log('Privilages ' + emp.privilages);
    }
    if ('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate);
    }
}
//# sourceMappingURL=typeguard.js.map