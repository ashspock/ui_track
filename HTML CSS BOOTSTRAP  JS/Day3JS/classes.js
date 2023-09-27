// class Employee{
//     //built in method > invoked on creation of object
//     constructor(para1, para2){ // parameterized constructor
//         // console.log('constructor is called');
//         this.empName = 'John'; // public
//         this.age = 25;
//         console.log(para1,para2);
//     }
// }
// let obj1 = new Employee('hello1', 'hello2');
// console.log(obj1.empName);
// console.log(obj1.age);
// let obj2 = new Emplyoyee();

class Employee{
    constructor(name, age){
        this.empName = name;// public attribution
        this.age = age;
    }

    // method in class
    swipeIn(){
        // console.log('Swiped in');
        //console.log(this);
        console.log('Swiped in '+ this.empName);
    }
    //static method
    static dummyPrint(){
        console.log('static method');
    }
}

// let obj1 = new Employee('John', 24 );
// let obj2 = new Employee('Wick', 26);
// console.log(obj1.empName);
// console.log(obj2.empName);
// obj1.swipeIn(); //   Employee { empName: 'John', age: 24 }
// obj2.swipeIn(); //   Employee { empName: 'Wick', age: 26 }
// obj1.swipeIn(); //  Employee { empName: 'Wick', age: 26 }
// Employee.dummyPrint(); //   static method

//  Inheritance > extends 
class Child extends Employee{
    constructor(name, age){
        super(name, age); // calls the parents method
    }
}
// let chiobj = new Child('Jason', 26);
// chiobj.swipeIn(); // Swiped in Jason
// console.log(chiobj.empName); // Jason
// console.log(chiobj.age); // 26
// Child.dummyPrint(); //   static method

