// Type Guards

type Combinable = string | number;
type Numeric = number | boolean;


// Now, the type Universal will have string | number | boolean since we used Intersection Types
type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {

    // return a + b;
    // The above a+b will give an ERROR bcoz it's type is Combinable i.e not fixed

    // This is a TYPE GUARD which is used to overcome the above issue
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}


// Now, Since we had to check the predefined type we used typeof as a TYPE GUARD
// But, what if the types are not primitive types
// For Example, Below

type Admin = {
    name: string;
    privilages: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

//For Intesection, we have no problem since,
// Here, ElevatedEmployee must have all name | privilages | startDate as required fields
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Harsh',
    startDate: new Date(),
    privilages: ['Free food', 'Fuel']
};

// But, what about the Union Types, Let's see
// Here, UnkownEmployee will surely have 'name' field 
// but can have anyone or both the 'startDate' | 'privilages' field
type UnkownEmployee = Admin | Employee;
function printEmployeeInformation(emp: UnkownEmployee) {
    console.log('Name: ' + emp.name);
    // The above line works fine bcox 'name' is present on both Admin and Employee
    //But the below line will give an ERROR since emp can be 'privilages' or 'startDate'
    // console.log('privilages: ' + emp.privilages);
    //Therefore, we need a TYPE GUARD here,
    if ('privilages' in emp)/** If classes were used we could have used 'instanceof' */ {
        console.log('Privilages ' + emp.privilages);
    }
    if ('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate);
    }

}