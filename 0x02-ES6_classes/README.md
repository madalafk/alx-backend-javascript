0x02. ES6 classes
OOP                     |JavaScript                    |ES6

Learning Objectives
In this project I have learnt the following
•	How to define a Class
•	How to add methods to a class
•	Why and how to add a static method to a class
•	How to extend a class from another
•	Metaprogramming and symbols


Tasks
0. You used to attend a place like this at some point
Implement a class named ClassRoom:
•	Prototype: export default class ClassRoom
•	It should accept one attribute named maxStudentsSize (Number) and assigned to _maxStudentsSize


1. Let's make some classrooms
Import the ClassRoom class from 0-classroom.js.
Implement a function named initializeRooms. It should return an array of 3 ClassRoom objects with the sizes 19, 20, and 34 (in this order).



2. A Course, Getters, and Setters
Implement a class named HolbertonCourse:
•	Constructor attributes:
o	name (String)
o	length (Number)
o	students (array of Strings)
•	Make sure to verify the type of attributes during object creation
•	Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
•	Implement a getter and setter for each attribute.


3. Methods, static methods, computed methods names..... MONEY
Implement a class named Currency:
•	- Constructor attributes:
o	code (String)
o	name (String)
•	Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
•	Implement a getter and setter for each attribute.
•	Implement a method named displayFullCurrency that will return the attributes in the following format name (code).


4. Pricing
Import the class Currency from 3-currency.js
Implement a class named Pricing:
•	Constructor attributes:
o	amount (Number)
o	currency (Currency)
•	Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
•	Implement a getter and setter for each attribute.
•	Implement a method named displayFullPrice that returns the attributes in the following format amount currency_name (currency_code).
•	Implement a static method named convertPrice. It should accept two arguments: amount (Number), conversionRate (Number). The function should return the amount multiplied by the conversion rate.


5. A Building
Implement a class named Building:
•	Constructor attributes:
o	sqft (Number)
•	Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
•	Implement a getter for each attribute.
•	Consider this class as an abstract class. And make sure that any class that extends from it should implement a method named evacuationWarningMessage.
o	If a class that extends from it does not have a evacuationWarningMessage method, throw an error with the message Class extending Building must override evacuationWarningMessage


6. Inheritance
Import Building from 5-building.js.
Implement a class named SkyHighBuilding that extends from Building:
•	Constructor attributes:
o	sqft (Number) (must be assigned to the parent class Building)
o	floors (Number)
•	Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
•	Implement a getter for each attribute.
•	Override the method named evacuationWarningMessage and return the following string Evacuate slowly the NUMBER_OF_FLOORS floors.

7. Airport
Implement a class named Airport:
•	Constructor attributes:
o	name (String)
o	code (String)
•	Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
•	The default string description of the class should return the airport code (example below).





8. Primitive - Holberton Class
Implement a class named HolbertonClass:
•	Constructor attributes:
o	size (Number)
o	location (String)
•	Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
•	When the class is cast into a Number, it should return the size.
•	When the class is cast into a String, it should return the location.


9. Hoisting
Fix this code and make it work.
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

export class HolbertonClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}

const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

export class StudentHolberton {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get holbertonClass() {
    return this.holbertonClass;
  }

  get fullStudentDescription() {
    return `${self._firstName} ${self._lastName} - ${self._holbertonClass.year} - ${self._holbertonClass.location}`;
  }
}


export const listOfStudents = [student1, student2, student3, student4, student5];



10. Vroom
Implement a class named Car:
•	Constructor attributes:
o	brand (String)
o	motor (String)
o	color (String)
•	Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
•	Add a method named cloneCar. This method should return a new object of the class.
Hint: Symbols in ES6


11. EVCar
Import Car from 10-car.js.
Implement a class named EVCar that extends the Car class:
•	Constructor attributes:
o	brand (String)
o	motor (String)
o	color (String)
o	range (String)
•	Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
•	For privacy reasons, when cloneCar is called on a EVCar object, the object returned should be an instance of Car instead of EVCar.

