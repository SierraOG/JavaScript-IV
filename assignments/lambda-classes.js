// CODE here for your Lambda Classes

class Person{
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.name;
        this.location = attributes.location;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(attributes){
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student,subject){
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person{
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }
    listsSubjects(){
        console.log(...this.favLanguage);
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor{
    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const chad = new Person({
    name: 'Chad',
    age: 29,
    location: 'Dallas'
})

const juhi = new Person({
    name: 'Juhi',
    age: 20,
    location: 'Idaho'
})

const jeff = new Student({
    name: 'Jeff',
    age: 24,
    location: 'Boston',
    previousBackground: 'Fire fighter',
    className: 'CS132',
    favSubjects: ['Html', 'CSS', 'JavaScript']
});

const paula = new Student({
    name: 'Paula',
    age: 19,
    location: 'California',
    previousBackground: 'Student',
    className: 'CS42',
    favSubjects: ['operating systems', 'algorithms', 'matrices']
})

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Live long and prosper`
});

const corey = new Instructor({
    name: 'Corey',
    location: 'Phoenix',
    age: 23,
    favLanguage: 'Python',
    specialty: 'Machine learning',
    catchPhrase: 'Corey says hi'
})

const jessica = new ProjectManager({
    name: 'Jessica',
    age: 28,
    location: 'Washington',
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: 'Hello, my name is Inigo Montoya. You killed my father. Prepare to die.',
    gradClassName: 'CS1',
    favInstructor: 'Dan'
})

const steve = new ProjectManager({
    name: 'Steve',
    age: 48,
    location: 'Austin',
    favLanguage: 'C++',
    specialty: 'Front-end',
    catchPhrase: "We're not in Kansas anymore"
})