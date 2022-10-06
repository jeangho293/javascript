class Person {
    name;
    age;

    // NOTE: 생성자로써 Person 객체를 생성할 시, initialize 되는 부분이라고 생각하면 된다.
    constructor(name, age) {
        this.name = name; // 매개변수로 받아온 name -> Person 객체의 name
        this.age = age; // 매개변수로 받아온 age -> Person 객체의 age
    }

    // NOTE: 모든 Person 객체는 describe() 메
    describe() {
        return `${this.name} is ${this.age}.`;
    }
}

const people = new Person('Min', 23); // class 타입의 객체(인스턴스)를 생성한다.
console.log(`name: ${people.name}`);
console.log(`age: ${people.age}`);
console.log(people.describe());