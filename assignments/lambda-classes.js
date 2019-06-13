// CODE here for your Lambda Classes
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


class Person{
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
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
    regrade(student){
        student.graded = student.graded + getRandomInt(-20,20);
        console.log(`${student.name} now made a ${student.graded}`);
    }
}

class Student extends Person{
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
        this.graded = attributes.graded;
    }
    listsSubjects(){
        console.log(...this.favSubjects);
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
    graduate(){
        if (this.graded >= 70){
            console.log(`${this.name} has a ${this.graded} and graduated from Lambda`);
        }
        else {
            console.log(`${this.name} has a ${this.graded} and can't graduate yet`);
        }
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
    location: 'Idaho',
})

const jeff = new Student({
    name: 'Jeff',
    age: 24,
    location: 'Boston',
    previousBackground: 'Fire fighter',
    className: 'CS132',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
    graded: 50
});

const paula = new Student({
    name: 'Paula',
    age: 19,
    location: 'California',
    previousBackground: 'Student',
    className: 'CS42',
    favSubjects: ['operating systems', 'algorithms', 'matrices'],
    graded: 100
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


chad.speak();
console.log(juhi);

jeff.listsSubjects();
paula.sprintChallenge('JavaScript');
paula.PRAssignment('JavaScript sprint challenge');
paula.graduate();
jeff.graduate();

fred.demo('JavaScript IV');
corey.grade(paula, 'JavaScript sprint challenge')

jessica.standUp('web21_jes');
steve.debugsCode(jeff,'JavaScript IV');
steve.regrade(jeff);
steve.regrade(jeff);
steve.regrade(jeff);

jeff.graduate();