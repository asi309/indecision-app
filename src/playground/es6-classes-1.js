class Person{
    constructor(name='Anonymous', age=0){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return `Hi, I am ${this.name}!`;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person{
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()){
            description += ` Their major is ${this.major}.`;
        }
        return description;
    }
}

class Traveler extends Person{
    constructor(name, age, home_loc){
        super(name, age);
        this.home_loc = home_loc;
    }

    getGreeting(){
        let greeting = super.getGreeting();
        if(this.home_loc){
            greeting += ` I am visiting from ${this.home_loc}.`;
        }
        return greeting;
    }
}

const me = new Student('Asidipta', 22, 'Software Engineering');
console.log(me);
console.log(me.getGreeting());
console.log(me.getDescription());
console.log(me.hasMajor());

const traveler = new Traveler('Asidipta', 22, 'Asansol');
console.log(traveler);
console.log(traveler.getGreeting());

const notTraveler = new Traveler();
console.log(notTraveler.getGreeting());

const other = new Student();
console.log(other.getDescription());