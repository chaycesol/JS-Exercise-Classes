/*
  EXAMPLE TASK:
    - Write an Airplane class whose constructor initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` property of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property gets set to true.
        + If a plane lands, its `isFlying` property gets set to false.
*/

// EXAMPLE SOLUTION CODE:
class Airplane {
  constructor(name) {
    this.name = name;
    this.isFlying = false;
  }
  takeOff() {
    this.isFlying = true;
  }
  land() {
    this.isFlying = false;
  }
}

/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person class whose constructor initializes `name` and `age` from arguments.
    - All instances of Person should also initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

// creating Parent object Person and methods

class Person {
  constructor(name, age, stomach){
    this.name = name;
    this.age = age;
    this.stomach = [];
  } 
  eat(edible){
    if(this.stomach.length < 10) {
      this.stomach.push(edible);
    }
  }
  poop(){
    this.stomach = [];
  }
  toString(){
    return `${this.name},  ${this.age}`;
  }
}

// creating objects
 const personOne = new Person('Bob', 52);


// console log tests
console.log(personOne); // prints person out properly
personOne.eat('pizza');
personOne.eat('taco');
personOne.eat('milkshake'); // fills stomach array properly 
console.log(personOne); // check if stomach array is filled
personOne.poop(); // emptys stomach array
console.log(personOne); // check if stomach array is emptied
console.log(personOne.toString()); // prints string


/*
  TASK 2
    - Write a Car class whose constructor initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with a `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

// buidling Constructor class to build Car object and methods
class Car {
  constructor(model, milesPerGallon, tank, odometer){
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.tank = 0;
    this.odometer = 0;
  }
  fill(gallons){
    this.tank = this.tank + gallons;
    return this.tank;
  }
  drive(distance){
    let remaining = this.tank *this.milesPerGallon;
    if (remaining <= distance){
      this.odometer += remaining;
      this.tank = 0;
      return `I ran out of fuel at ${this.odometer}!`
    } else{
      this.odometer += distance;
      this.tank -= distance / this.milesPerGallon;
    }
}}
  // creating car object
const carOne = new Car('Outback', 20);

console.log(carOne); //checks that car is created correctly
carOne.fill(20); // fills the tank with 20 gallons
console.log(carOne); // checking to see if value from fill was stored in object
carOne.drive(178); // invokes drive method from car object
console.log(carOne); // checking to see if odometer went up and tank went down
carOne.drive(100); // invokes drive method from car object
console.log(carOne); 


/*
  TASK 3
    - Write a Lambdasian class.
    - Its constructor takes a single argument - an object with the following keys:
        + name
        + age
        + location
    - Its constructor should initialize `name`, `age` and `location` properties on the instance.
    - Instances of Lambdasian should be able to `.speak()`:
        + Speaking should return a phrase `Hello my name is {name}, I am from {location}`.
        + {name} and {location} of course come from the instance's own properties.
*/

//creates Lambdasian Constructor for object creation
class Lambdasian {
  constructor(attributes){
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
  }
  speak(){
    return `Hello my name is ${this.name}, I am from ${this.location}.`
  }
}

// creates new Lambdasian
const lambdasianOne = new Lambdasian({
  name: 'Chayce',
  age: 33,
  location: 'Los Angeles',
});

console.log(lambdasianOne); // checks to see if Lambdasian was created correctly
console.log(lambdasianOne.speak()); // invokes the speak method from Lambdasian


/*
  TASK 4
    - Write an Instructor class extending Lambdasian.
    - Its constructor takes a single argument - an object with the following keys:
        + All the keys used to initialize instances of Lambdasian.
        + `specialty`: what the instance of Instructor is good at, i.e. 'redux'
        + `favLanguage`: i.e. 'JavaScript, Python, Elm etc.'
        + `catchPhrase`: i.e. `Don't forget the homies`.
    - The constructor calls the parent constructor passing it what it needs.
    - The constructor should also initialize `specialty`, `favLanguage` and `catchPhrase` properties on the instance.
    - Instructor instances have the following methods:
        + `demo` receives a `subject` string as an argument and returns the phrase 'Today we are learning about {subject}' where subject is the param passed in.
        + `grade` receives a `student` object and a `subject` string as arguments and returns '{student.name} receives a perfect score on {subject}'
*/

// creates Instructor constructor and methods to make instructor objects
class Instructor extends Lambdasian {
  constructor (attributes){
    super(attributes);
    this.specialty = attributes.specialty;
    this.favLanguage = attributes.favLanguage;
    this.catchPhrase = attributes.catchPhrase;
  }
  demo(subject){
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject){
    return `${student.name} receives a perfect score on ${subject}`;
  }
}

const britH = new Instructor ({
  name: 'Brit',
  age: '32',
  location: 'Canada',
  specialty: 'Intro to everything',
  favLanguage: 'Javascript',
  catchPhrase: 'Hello Web 33'
});

console.log(britH); // check to see if Instructor was created
console.log(britH.speak()); // checks to see if parent method was inherited
console.log(britH.demo('Arrays')); // checks to see if demo method works as expected


/*
  TASK 5
    - Write a Student class extending Lambdasian.
    - Its constructor takes a single argument -  an object with the following keys:
        + All the keys used to initialize instances of Lambdasian.
        + `previousBackground` i.e. what the Student used to do before Lambda School
        + `className` i.e. CS132
        + `favSubjects`. i.e. an array of the student's favorite subjects ['HTML', 'CSS', 'JS']
    - The constructor calls the parent constructor passing to it what it needs.
    - The constructor should also initialize `previousBackground`, `className` and `favSubjects` properties on the instance.
    - Student instances have the following methods:
        + `listSubjects` a method that returns all of the student's favSubjects in a single string: `Loving HTML, CSS, JS!`.
        + `PRAssignment` a method that receives a subject as an argument and returns `student.name has submitted a PR for {subject}`
        + `sprintChallenge` similar to PRAssignment but returns `student.name has begun sprint challenge on {subject}`
*/

// creates Student conscructor inheriting values and methods from Lambdasian
class Student extends Lambdasian {
  constructor(attributes){
    super(attributes);
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.Name = attributes.className;
    this.favSubjects = attributes.favSubjects;
  }
  listSubjects(){
    return `Loving ${this.favSubjects}`
  }
  PRAssignment(subject){
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject){
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
}

//creates new student object
const studentOne = new Student ({
  name: 'Harrison',
  age: '25',
  location: 'West Coast',
  previousBackground: 'No experience',
  className: 'WEB33',
  favSubjects: 'HTML, CSS, Javascript'
})

console.log(studentOne); // checking to see if Student object is created correctly
console.log(studentOne.listSubjects()); // checking to see if listSubjects() method is working properly
console.log(studentOne.PRAssignment('Objects')); // checking to see if PRAssignment() method is working properly
console.log(studentOne.sprintChallenge('classes')); // checking to see if sprintChallenge() method is working properly
console.log(britH.grade(studentOne, 'Arrays')) //checks to see if grade method works as expected
/*
  TASK 6
    - Write a ProjectManager class extending Instructor.
    - Its constructor takes a single argument - an object with the following keys:
        + All the keys used to initialize instances of Instructor.
        + `gradClassName`: i.e. CS1
        + `favInstructor`: i.e. Sean
    - Its constructor calls the parent constructor passing to it what it needs.
    - The constructor should also initialize `gradClassName` and `favInstructor` properties on the instance.
    - ProjectManager instances have the following methods:
        + `standUp` a method that takes in a slack channel and returns `{name} announces to {channel}, @channel standy times!`
        + `debugsCode` a method that takes in a student object and a subject and returns `{name} debugs {student.name}'s code on {subject}`
*/

// create ProjectManager object constructor and methods that inherits from Instructor
class ProjectManager extends Instructor{
  constructor(attributes) {
    super(attributes);
    this.gradClassName = attributes.gradClassName;
    this.favInstructor = attributes.favInstructor;
  }
  standUp(slackChannel){
    return `${this.name} announces to #${slackChannel} @channel standy times!`
  }
  debugsCode(otherStudent, subject){
    return `${this.name} debugs ${otherStudent.name}'s code on ${subject}`
  }
}

//create new new Project Manager object
const projectManagerOne = new ProjectManager ({
  name: 'Project Mann',
  age: '27',
  location: 'Sao Paolo',
  specialty: 'Intro to everything',
  favLanguage: 'Javascript',
  catchPhrase: 'Hello Web 33',
  gradClassName: 'PTWEB19',
  favInstructor: 'Brit Hemming',
})

console.log(projectManagerOne); // check to see if project manager was created correctly
console.log(projectManagerOne.demo('Arrays')); // checks to see if demo method was inherited from Instructor
console.log(projectManagerOne.speak()); // check to see if method was inherited from grandparent Lamdasian
console.log(projectManagerOne.standUp('web33_harrison')); // checks to see if standUp method is working as expected
console.log(projectManagerOne.debugsCode(studentOne, 'classes')); // checks to see if debugsCode method is working as expected
/*
  STRETCH PROBLEM (no tests!)
    - Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
    - Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
    - Add a graduate method to a student.
      + This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
      + If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
*/

///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Lambdasian) { module.exports.Lambdasian = Lambdasian }
  if (Instructor) { module.exports.Instructor = Instructor }
  if (Student) { module.exports.Student = Student }
  if (ProjectManager) { module.exports.ProjectManager = ProjectManager }
}
